/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojnavigationlist','ojs/ojswitcher' ,'ojs/ojmasonrylayout'],
        function (oj, ko, $) {

            function PortfolioViewModel() {

                var self = this;     
                
                self.tabItems = [
                    {id:"all", title:"All"},
                    {id:"web", title:"Web"},
                    {id:"mobile", title:"Mobile"}
                ];
                
                self.selectedItem = ko.observable('all');

                self.handleActivated = function (info) {
                    // Implement if needed

                    console.log(oj.Router.rootInstance.stateId());
                };

                self.handleAttached = function (info) {
                    // Implement if needed
                };


                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                };


                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            return new PortfolioViewModel();
        }
);