using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ghAPI
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class PublicTab : ContentPage
	{
		public PublicTab ()
		{
			InitializeComponent ();
            getPublicEvents();
        }

        private async void getPublicEvents() 
        {

            HttpClient client = new HttpClient();

            try
            {
                var response = await client.GetStringAsync("https://api.github.com/events");
                var pubEvents = JsonConvert.DeserializeObject<PublicUser.Root>(response);
                publicEventsListView.ItemsSource = pubEvents.ToString();

            }
            catch (Exception e)
            {
                Console.Out.WriteLine(e.ToString());
            }

            //try
            //{
            //    using (WebClient client = new WebClient())
            //    {
            //        //string url = string.Format("https://api.github.com/events");
            //        var response = client.DownloadString("https://api.github.com/events");
            //        var pubEvents = JsonConvert.DeserializeObject<PublicUser.Root>(response);
            //        publicEventsListView.ItemsSource = pubEvents.ToString();
            //    }
            //}
            //catch (Exception e)
            //{
            //    Console.Out.WriteLine(e.ToString());
            //}
        }
    }
}