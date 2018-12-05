define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmasonrylayout'],
        function (oj, ko, $) {
            function WebTabPageViewModel() {
                
                var self = this;
                
                self.samples = [
                    {id: 1,  title: 'Web-Screen-1',   sizeClass:'oj-masonrylayout-tile-2x2'},
                    {id: 2,  title: 'Web-Screen-2',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 3,  title: 'Web-Screen-3',   sizeClass: 'oj-masonrylayout-tile-2x2'},    
                    {id: 4,  title: 'Web-Screen-4',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 5,  title: 'Web-Screen-5',   sizeClass: 'oj-masonrylayout-tile-2x2'},
                    {id: 6,  title: 'Web-Screen-6',   sizeClass: 'oj-masonrylayout-tile-2x2'}
                ];
                
            }
            

            return new WebTabPageViewModel();
        }
);