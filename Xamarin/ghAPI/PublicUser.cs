using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace ghAPI
{
    class PublicUser
    {
        public class Actor
        {
            public string login { get; set; }
            public string avatar_url { get; set; }
        }

        public class Repo
        {
            public string name { get; set; }
            public string url { get; set; }
        }

        public class Root
        {
            public string type { get; set; }
            public Actor actor { get; set; }
            public Repo repo { get; set; }
        }

    }
}
