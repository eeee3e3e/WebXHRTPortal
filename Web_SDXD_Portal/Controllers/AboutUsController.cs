using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_SDXD_Portal.Controllers
{
    public class AboutUsController : Controller
    {
        // GET: AboutUs
       
        public PartialViewResult Enterprise_Culture()
        {
            return PartialView();
        }
        public PartialViewResult Enterprise_Intro()
        {
            return PartialView();
        }
    }
}