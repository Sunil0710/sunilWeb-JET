/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojpopup'],
        function (oj, ko, $) {

            function ContactViewModel() {
                var self = this;

                function createMap() {

                    var map, mapProp;
                    var myLatLng = {lat: 39.052626, lng: -77.437586};

                    mapProp = {
                        center: myLatLng,
                        zoom: 14,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
                    var infowindow = new google.maps.InfoWindow();

                   
                    
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        icon: {
                            path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
                            fillColor: '#e76947',
                            fillOpacity: 1,
                            strokeColor: '#000',
                            strokeWeight: 1,
                            scale: 1.2
                        }
                    });

                    var contentString = '<div id="markerPopup">' +
                            '<h3 id="infoContent" style="color: #e76947; font-size: 20px">Sunil Kumar</h3>' +
                            '<div> <h5 style="color: #e76947; font-size= 15px; font-weight: 200"> Ashburn, VA </h5> </div>' +
                            '</div>';
                    google.maps.event.addListener(marker, 'click', (function (marker) {
                        return function () {
                            infowindow.setContent(contentString);
                            infowindow.open(map, marker);
                        };
                    })(marker));

                    //marker.setMap(map);

                }
                ;

                self.effect = ko.observable('all 2s');
                self.divHide = ko.observable(true);
                
                self.popUpHeight = ko.observable();

                console.log(self.divHide() === true);
                self.collapseHeight = function () {
                    if (self.divHide() === true) {

                        self.divHide(false);
                        $('#iconMinus').removeClass('fas fa-minus').addClass('fas fa-plus');
                        
                        //console.log('1:' + self.divHide());
                        self.popUpHeight('50px');
                    } else {

                        self.divHide(true);
                        $('#iconMinus').removeClass('fas fa-plus').addClass('fas fa-minus');
                        
                        //console.log('2:' + self.divHide());
                        self.popUpHeight('');
                    }
                };

                self.openContPopup = function () {
                    //alert('this is write pop-up');
                    //$('#contactPopup').ojPopup('open');
                };

                self.closeContactPopup = function () {
                    //alert('this is write pop-up');
                    $('#contactPopup').ojPopup('close');
                };

                self.contactAnimationListener = function (data, event) {
                    var ui = event.detail;

                    if (!$(event.target).is("#contactPopup"))
                        return;

                    if ("open" === ui.action)
                    {
                        event.preventDefault();
                        var options = {"direction": "bottom", "duration": "2s"};
                        oj.AnimationUtils.zoomIn(ui.element, options).then(ui.endCallback);
                    } else if ("close" === ui.action)
                    {
                        event.preventDefault();
                        var options = {"direction": "top", "duration": "2s"};
                        oj.AnimationUtils.zoomOut(ui.element, options).then(ui.endCallback);
                    }
                };


                self.handleActivated = function (info) {
                    // Implement if needed
                };

                self.handleAttached = function (info) {
                    // Implement if needed
                };

                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                    createMap();
                    
                    var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                    self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
                
                    var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_DOWN);
                    self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
                   

                    var busyContext = oj.Context.getPageContext().getBusyContext();
                    busyContext.whenReady().then(function ()
                    {
                        if (self.smScreen()) {
                            $('#contactPopup').ojPopup('close');
                            //console.log('1: true');
                        } else {
                            $('#contactPopup').ojPopup('open');
                            //console.log('2: false');
                        }

                    });
                };

                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            return new ContactViewModel();
        }
);