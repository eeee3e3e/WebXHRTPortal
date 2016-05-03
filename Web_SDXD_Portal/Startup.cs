using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Web_SDXD_Portal.Startup))]
namespace Web_SDXD_Portal
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
