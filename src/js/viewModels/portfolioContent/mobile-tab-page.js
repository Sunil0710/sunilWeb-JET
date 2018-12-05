define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmasonrylayout'],
        function (oj, ko, $) {
            function MobileTabPageViewModel() {
                
                var self = this;
                
                self.samples = [
                    {id: 1,  title: 'Mob-Screen-1',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 2,  title: 'Mob-Screen-2',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 3,  title: 'Mob-Screen-3',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 4,  title: 'Mob-Screen-4',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 5,  title: 'Mob-Screen-5',   sizeClass: 'oj-masonrylayout-tile-2x3'},
                    {id: 6,  title: 'Mob-Screen-6',   sizeClass: 'oj-masonrylayout-tile-2x3'}
                ];
                
            }
            

            return new MobileTabPageViewModel();
        }
);