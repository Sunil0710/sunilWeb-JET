/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $) {
  
    function StartViewModel() {
      var self = this;
      
      self.gotoMyResume = function(){
          oj.Router.rootInstance.go('resume');
      };
      
      self.gotoMyWork = function(){
          oj.Router.rootInstance.go('portfolio');
      };
      
      self.handleActivated = function(info) {
        // Implement if needed
      };

      self.handleAttached = function(info) {
        // Implement if needed
      };


      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

     
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }
    
    return new StartViewModel();
  }
);