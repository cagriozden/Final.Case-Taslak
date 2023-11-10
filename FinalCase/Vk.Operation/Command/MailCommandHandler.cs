using MediatR;
using System.Net;
using System.Net.Mail;
using Vk.Base.Response;
using Vk.Schema;

namespace Vk.Operation.Command;

public class MailCommandHandler :
    IRequestHandler<CreateMailCommand, ApiResponse>
{
    public MailCommandHandler() { }

    public async Task<ApiResponse> Handle(CreateMailCommand request, CancellationToken cancellationToken)
    {
        MailMessage myMessage = new MailMessage();
        SmtpClient client = new SmtpClient();
        client.Credentials = new System.Net.NetworkCredential("cagriozdenn@outlook.com", "ankara1517");
        client.Port = 587;
        client.Host = "smtp-mail.outlook.com";
        client.EnableSsl = true;
        myMessage.To.Add(request.Model.Email);
        myMessage.From = new MailAddress("cagriozdenn@outlook.com");
        myMessage.Subject = request.Model.Name;
        myMessage.Body = request.Model.Description;

        client.Send(myMessage);
        return new ApiResponse();
    }

}
