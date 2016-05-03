using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_SDXD_Portal.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact
        public PartialViewResult Contact_Customer()  //add by YangDu 0422 2016
        {
            
            return PartialView();
        }
        public PartialViewResult ContactUs()
        {
            return PartialView();
        }
    }
}