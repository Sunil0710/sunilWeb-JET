define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmasonrylayout'],
        function (oj, ko, $) {
            function AllTabPageViewModel() {
                
                var self = this;
                
                self.samples = [
                    {id: 1,  title: 'Web-screen-1',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 2,  title: 'Mob-screen-2',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 3,  title: 'Web-screen-3',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 4,  title: 'Mob-screen-4',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 5,  title: 'Web-screen-5',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 6,  title: 'Mob-screen-6',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 7,  title: 'Mob-screen-7',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 8,  title: 'Web-screen-8',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 9,  title: 'Web-screen-9',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 10, title: 'Web-screen-10',  sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 11, title: 'Mob-screen-11',  sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 12, title: 'Web-screen-12',  sizeClass: 'oj-masonrylayout-tile-2x2'}
                ];
                
            }
            
            return new AllTabPageViewModel();
        }
);