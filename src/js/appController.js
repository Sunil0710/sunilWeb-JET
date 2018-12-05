/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource','ojs/ojmodule',
    'ojs/ojoffcanvas','ojs/ojvalidation','ojs/ojavatar'],
        function (oj, ko) {
            function ControllerViewModel() {
                var self = this;

                // Media queries for repsonsive layouts
                var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
                var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
                self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

                // Router setup
                self.router = oj.Router.rootInstance;
                self.router.configure({
                    'start': {label: 'Start', isDefault: true},
                    'resume': {label: 'Resume'},
                    'portfolio': {label: 'Portfolio'},
                    'contact': {label: 'Contact'}
                });
                oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();


                // Navigation setup
                var navData = [
                    {name: 'Start', id: 'start',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
                    {name: 'Resume', id: 'resume',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'},
                    {name: 'Portfolio', id: 'portfolio',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'},
                    {name: 'Contact', id: 'contact',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'}
                ];
                self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

                // Drawer
                // Close offcanvas on medium and larger screens
                self.mdScreen.subscribe(function () {
                    oj.OffcanvasUtils.close(self.drawerParams);
                });
                self.drawerParams = {
                    displayMode: 'overlay',
                    selector: '#navDrawer',
                    content: '#pageContent'
                };
                // Called by navigation drawer toggle button and after selection of nav drawer item
                self.toggleDrawer = function () {
                    return oj.OffcanvasUtils.toggle(self.drawerParams);
                }
                // Add a close listener so we can move focus back to the toggle button when the drawer closes
                $("#navDrawer").on("ojclose", function () {
                    $('#drawerToggleButton').focus();
                });

                // Header
                self.firstName = 'Sunil';
                self.lastName = 'Kumar';
                self.positionTitle = 'UI Developer';
                self.initials = oj.IntlConverterUtils.getInitials(self.firstName, self.lastName);

                console.log(self.initials);
                
                self.gotoHome = function(){
                    oj.Router.rootInstance.go('start');
                };
            }

            return new ControllerViewModel();
        }
);
