/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','moment','promise', 'ojs/ojgauge', 'ojs/ojlistview', 'ojs/ojarraydataprovider', 'ojs/ojdialog', 'ojs/ojbutton', 'ojs/ojpopup'],
        function (oj, ko, $, moment) {

            function ResumeViewModel() {
                var self = this;
                self.aboutYou = ko.observable("Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry. \n\
                                     Skilled in HTML, Cascading Style Sheets (CSS), KnockoutJS, HTML5, and JavaScript. \n\
                                     Strong engineering professional with a Master's degree focused in Computer Software Engineering from Virginia International University.");



                var jeData = 'js/data/jeData.json';

                var data = [
                    {name: 'Html5', value: 85, label: {text: 'HTML 5: 85%', style: {color: 'white', 'font-size': '15px', 'font-family': '"Titillium Web", sans-serif'}}},
                    {name: 'JavaScript', value: 70, label: {text: 'JavaScript: 70%', style: {color: 'white', 'font-size': '15px', 'font-family': '"Titillium Web", sans-serif'}}},
                    {name: 'CSS3', value: 85, label: {text: 'CSS 3: 85%', style: {color: 'white', 'font-size': '15px', 'font-family': '"Titillium Web", sans-serif'}}},
                    {name: 'JQuery', value: 75, label: {text: 'JQuery: 75%', style: {color: 'white', 'font-size': '15px', 'font-family': '"Titillium Web", sans-serif'}}},
                    {name: 'KnockOutJS', value: 70, label: {text: 'KnockOutJS: 70%', style: {color: 'white', 'font-size': '15px', 'font-family': '"Titillium Web", sans-serif'}}},
                    {name: 'Oracle JET', value: 60, label: {text: 'Oracle JET: 60%', style: {color: 'white', 'font-size': '15px', 'font-family': '"Titillium Web", sans-serif'}}}
                ];

                self.skillsDataProvider = new oj.ArrayDataProvider(data,
                        {keys: data.map(function (value) {
                                return value.name;
                            })});

                var eeData = function () {
                    var data;
                    $.ajax({
                        url: jeData,
                        async: false,
                        success: function (info) {
                            data = info;
                        }
                    });
                    return data;
                }();

                self.expDataProvider = new oj.ArrayDataProvider(eeData['experience'], {keys: eeData['experience'].map(function (value) {
                        return value.id;
                    })});

                self.eduDataProvider = new oj.ArrayDataProvider(eeData['education'], {keys: eeData['education'].map(function (value) {
                        return value.id;
                    })});


                self.role = ko.observable();
                self.name = ko.observable();
                self.date = ko.observable();
                self.description = ko.observable();
                self.totalTime = ko.observable();

                self.respData = ko.observableArray();
                self.getExpDetails = function (data) {
//                    console.log(data);
                    $('#expPopup').ojPopup('open');
                    self.role(data.role);
                    self.name(data.name);
                    self.date(data.sdate +'\xa0\xa0  to \xa0\xa0' + data.edate);
                    self.description(data.description);
                    self.respData(data.responsibilities);
                    

                    var startDate = new Date(data.sdate);
                    if(data.edate === 'Present'){
                        var endDate = new Date();
                    }else{
                        endDate = new Date(data.edate);
                    }
                    
                    self.totalTime(dateDiff(startDate, endDate));
                };

                self.closeExpPopup = function () {
                    $('#expPopup').ojPopup('close');
                };

                self.startAnimationListener = function (data, event) {
                    var ui = event.detail;

                    if (!$(event.target).is("#expPopup"))
                        return;

                    if ("open" === ui.action)
                    {
                        event.preventDefault();
                        var options = {"direction": "top"};
                        oj.AnimationUtils.slideIn(ui.element, options).then(ui.endCallback);
                    } else if ("close" === ui.action)
                    {
                        event.preventDefault();
                        var options = {"direction": "bottom"};
                        oj.AnimationUtils.slideOut(ui.element, options).then(ui.endCallback);
                    }
                };
                
                // function to calculate total years experience
                function dateDiff(sDate, eDate){
                    var a = moment(eDate),
                        b = moment(sDate),
                        intervals = ['years', 'months'],
                        out = [];
                
                    for(var i=0; i< intervals.length; i++){
                        var diff = a.diff(b, intervals[i]);
                        b.add(diff, intervals[i]);
                        out.push(diff + ' ' + intervals[i]);
                    }
                    
                    return out.join(', ');
                };

            }

            return new ResumeViewModel();
        }
);