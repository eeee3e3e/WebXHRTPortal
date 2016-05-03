using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_SDXD_Portal.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About(string id)
        {
            ViewBag.id = id;
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        //public PartialViewResult Enterprise_Culture(string strSubViewLink)
        //{
        //    ViewBag.subViewLink = strSubViewLink;
        //    return PartialView();
        //}
        public ActionResult JoinUs()
        {
            
            ViewBag.Message = "JoinUs";
            return View();
        }
        public ActionResult Product(string id)
        {
            ViewBag.id = id;
            return View();
        }
    }
}