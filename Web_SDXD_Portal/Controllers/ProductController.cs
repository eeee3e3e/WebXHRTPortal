using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_SDXD_Portal.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public PartialViewResult Product_Data()  //add by YangDu 2016 04 21
        {
            return PartialView("Product_Data");
        }

        public PartialViewResult Product_Voice() //add by YangDu 2016 04 22
        {
            return PartialView("Product_Voice");
        }
        public PartialViewResult Product_Management() //add by YangDu 2016 04 22
        {
            return PartialView("Product_Management");
        }

    }
}