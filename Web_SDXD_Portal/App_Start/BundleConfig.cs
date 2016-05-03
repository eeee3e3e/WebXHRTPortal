using System.Web;
using System.Web.Optimization;

namespace Web_SDXD_Portal
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
           // bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                      //  "~/Scripts/jquery-{version}.js"));
                      //another function is include dictory
            bundles.Add(new ScriptBundle("~/js/js").Include(
                       "~/js/public.js               ",
                       "~/js/AC_RunActiveContent.js  ",
                       "~/js/nav.js                  ",
                       "~/js/msclass.js              ",
                       "~/js/jquery.watermarkinput.js",
                       "~/js/jquery.js               ",
                       "~/js/jquery.cycle.js         ",
                       "~/js/index.js                ",
                       "~/js/imgbubbles.js           ",
                       "~/js/DD_belatedPJNG.js        ",
                       "~/js/banner.js               ",
                       "~/js/AC_RunActiveContent.js  "
                       //"~/js/bannerJs/jquery-1.js    ",
                       //"~/js/bannerJs/zzsc.js        "
                       ));

            bundles.Add(new ScriptBundle("~/js/js").IncludeDirectory("~/js/bannerJs", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/style/css").Include(
                       "~/Content/style/about.css     ",
                        "~/Content/style/aboutUsjl.css ",
                        "~/Content/style/base.css      ",
                        "~/Content/style/contact.css   ",
                        "~/Content/style/globle.css    ",
                        "~/Content/style/index.css     ",
                        "~/Content/style/news.css      ",
                        "~/Content/style/product.css   ",
                        "~/Content/style/productgh.css ",
                        "~/Content/style/public.css    "));

            



        }
    }
}
