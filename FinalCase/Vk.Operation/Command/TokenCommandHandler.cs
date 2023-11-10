﻿using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Vk.Base;
using Vk.Base.Response;
using Vk.Base.Token;
using Vk.Data.Context;
using Vk.Data.Domain;
using Vk.Schema;
namespace Vk.Operation.Command;


public class TokenCommandHandler :
    IRequestHandler<CreateTokenCommand, ApiResponse<TokenResponse>>

{
    private readonly VkDbContext dbContext;
    private readonly JwtConfig jwtConfig;

    public TokenCommandHandler(VkDbContext dbContext, IOptionsMonitor<JwtConfig> jwtConfig)
    {
        this.dbContext = dbContext;
        this.jwtConfig = jwtConfig.CurrentValue;
    }


    public async Task<ApiResponse<TokenResponse>> Handle(CreateTokenCommand request,
        CancellationToken cancellationToken)
    {
        var entity = await dbContext.Set<User>().FirstOrDefaultAsync(x => x.UserEmail == request.Model.UserEmail, cancellationToken);
        if (entity == null)
        {
            return new ApiResponse<TokenResponse>("Invalid user informations");
        }

        var md5 = Md5.Create(request.Model.UserPassword);
        if (entity.UserPassword != md5)
        {
            entity.UserPasswordRetryCount++;
            await dbContext.SaveChangesAsync(cancellationToken);

            return new ApiResponse<TokenResponse>("Invalid user informations");
        }

        string token = Token(entity);
        TokenResponse tokenResponse = new()
        {
            Token = token,
        };

        return new ApiResponse<TokenResponse>(tokenResponse);
    }

    private string Token(User user)
    {
        Claim[] claims = GetClaims(user);
        var secret = Encoding.ASCII.GetBytes(jwtConfig.Secret);

        var jwtToken = new JwtSecurityToken(
            jwtConfig.Issuer,
            jwtConfig.Audience,
            claims,
            expires: DateTime.Now.AddMinutes(jwtConfig.AccessTokenExpiration),
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature)
        );

        string accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);
        return accessToken;
    }


    private Claim[] GetClaims(User User)
    {
        var claims = new[]
        {
            new Claim("Id", User.Id.ToString()),
            new Claim("UserNumber", User.UserNumber.ToString()),
            new Claim("UserRole", User.UserRole),
            new Claim("UserEmail", User.UserEmail),
            new Claim(ClaimTypes.Role, User.UserRole),
            new Claim("UserName", $"{User.UserName}")
        };

        return claims;
    }
}