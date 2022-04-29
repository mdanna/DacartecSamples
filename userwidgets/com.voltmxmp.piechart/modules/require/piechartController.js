/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Doughnut Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates Pie chart by taking the data as input
 */
define(function() {
  var voltmxLoggerModule = require('com/voltmxmp/piechart/voltmxLogger');
  voltmxLog = {};
  voltmxLog.logger = new voltmxLoggerModule("Pie Chart MultiSeries Component");
  voltmxLog.logger.setLogLevel('INFO');
  return {
    /**
		 * @function constructor
         * @private
		 * @params {Object} baseConfig, layoutConfig, pspConfig
		 */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      //var analytics=require("com/voltmxmp/"+"piechart"+"/analytics");
      //analytics.notifyAnalytics();
      voltmxLog.logger.trace("----------Entering constructor---------", voltmxLog.logger.FUNCTION_ENTRY);
      this._chartProperties = {_titleFontSize:12,
                               _titleFontColor:"#000000",
                               _enableLegend:true,
                               _legendFontSize:10,
                               _legendFontColor:"#000000",
                               _bgColor:"#ffffff"  
                              };
      this._data  = [];
      this._chartTitle = "";
      this._enableStaticPreview = true;
      chart_pie_defined_global = function(state){
        if(state ==='ready'){
          this.myPostShow();
        }
      }.bind(this);
      voltmxLog.logger.trace("----------Exiting constructor---------", voltmxLog.logger.FUNCTION_EXIT);
    },
    /**
		 * @function initGetterSetters
		 * @private
         * @description: Logic for getters/setters of custom properties
		 */
    initGettersSetters: function() {
      voltmxLog.logger.trace("----------Entering initGettersSetters Function---------", voltmxLog.logger.FUNCTION_ENTRY);
      this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
      defineSetter(this, "chartData", function(val) {
        voltmxLog.logger.trace("----------Entering data Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        this._data = val.data;
        voltmxLog.logger.trace("----------Exiting data Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "enableStaticPreview", function(val) {
        voltmxLog.logger.trace("----------Entering enableStaticPreview Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        this._enableStaticPreview = val;
        voltmxLog.logger.trace("----------Exiting enableStaticPreview Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "chartTitle", function(val) {
        voltmxLog.logger.trace("----------Entering chartTitle Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        this._chartTitle = val;
        voltmxLog.logger.trace("----------Exiting chartTitle Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "titleFontSize", function(val) {
        voltmxLog.logger.trace("----------Entering titleFontSize Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        try {
          if(!isNaN(parseInt(val))) {
            this._chartProperties._titleFontSize = val;
          }
          else {
            throw {"Error": "NotNumber", "message": "Title font size value should be a number"};
          }
        }
        catch(exception) {
          voltmxLog.logger.error(JSON.stringify(exception), voltmxLog.logger.EXCEPTION);
          if(exception.Error === "NotNumber") {
            throw(exception);
          }
        }
        voltmxLog.logger.trace("----------Exiting titleFontSize Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "titleFontColor", function(val) {
        voltmxLog.logger.trace("----------Entering titleFontColor Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        try {
          if(this.hexCodeFormat.test(val)) {
            this._chartProperties._titleFontColor = val;
          }
          else {
            throw {"Error": "InvalidTitleFontColorCode", "message": "Title Font color code must be in hex format. Eg.:#000000"};
          }
        }
        catch(exception) {
          voltmxLog.logger.error(JSON.stringify(exception), voltmxLog.logger.EXCEPTION);
          if(exception.Error === "InvalidTitleFontColorCode") {
            throw(exception);
          }
        }
        voltmxLog.logger.trace("----------Exiting titleFontColor Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "enableLegend", function(val) {
        voltmxLog.logger.trace("----------Entering enableLegend Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        this._chartProperties._enableLegend = val;
        voltmxLog.logger.trace("----------Exiting enableLegend Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "legendFontSize", function(val) {
        voltmxLog.logger.trace("----------Entering legendFontSize Setter---------", voltmxLog.logger.FUNCTION_ENTRY); 
        try {
          if(!isNaN(parseInt(val))) {
            this._chartProperties._legendFontSize = val;
          }
          else {
            throw {"Error": "NotNumber", "message": "Legend font size value should be a number"};
          }
        }
        catch(exception) {
          voltmxLog.logger.error(JSON.stringify(exception), voltmxLog.logger.EXCEPTION);
          if(exception.Error === "NotNumber") {
            throw(exception);
          }
        }
        voltmxLog.logger.trace("----------Exiting legendFontSize Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "legendFontColor", function(val) {
        voltmxLog.logger.trace("----------Entering legendFontColor Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        try {
          if(this.hexCodeFormat.test(val)) {
            this._chartProperties._legendFontColor = val;
          }
          else {
            throw {"Error": "InvalidLegendFontColorCode", "message": "Legend Font color code must be in hex format. Eg.:#000000"};
          }
        }
        catch(exception) {
          voltmxLog.logger.error(JSON.stringify(exception), voltmxLog.logger.EXCEPTION);
          if(exception.Error === "InvalidLegendFontColorCode") {
            throw(exception);
          }
        }
        voltmxLog.logger.trace("----------Exiting legendFontColor Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "bgColor", function(val) {
        voltmxLog.logger.trace("----------Entering bgColor Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        try {
          if(this.hexCodeFormat.test(val)) {
            this._chartProperties._bgColor = val;
          }
          else {
            throw {"Error": "InvalidBackgroundColorCode", "message": "Background color code must be in hex format. Eg.:#000000"};
          }
        }
        catch(exception) {
          voltmxLog.logger.error(JSON.stringify(exception), voltmxLog.logger.EXCEPTION);
          if(exception.Error === "InvalidBackgroundColorCode") {
            throw(exception);
          }
        }
        voltmxLog.logger.trace("----------Exiting bgColor Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "labelColor", function(val) {
        voltmxLog.logger.trace("----------Entering labelColor Setter---------", voltmxLog.logger.FUNCTION_ENTRY);
        try {
          if(this.hexCodeFormat.test(val)) {
            this._chartProperties._labelColor = val;
          }
          else {
            throw {"Error": "InvalidLabelColorCode", "message": "Label color code must be in hex format. Eg.:#000000"};
          }
        }
        catch(exception) {
          voltmxLog.logger.error(JSON.stringify(exception), voltmxLog.logger.EXCEPTION);
          if(exception.Error === "InvalidLabelColorCode") {
            throw(exception);
          }
        }
        voltmxLog.logger.trace("----------Exiting labelColor Setter---------", voltmxLog.logger.FUNCTION_EXIT);
      });
      this.view.PieBrowser.onPageFinished = this.myPostShow.bind(this);
      voltmxLog.logger.trace("----------Exiting initGettersSetters Function---------", voltmxLog.logger.FUNCTION_EXIT);
    },
    /**
       	 * @function createDonutChart         
       	 * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of Pie chart
       	 */
    createChart: function(dataSet) {
      voltmxLog.logger.trace("----------Entering createPieChart Function---------", voltmxLog.logger.FUNCTION_ENTRY);
      try {
        if(dataSet===undefined)
        {
          if(this._data.length<0)
            throw {Error:'No Data',message:"no data assigned for chart"};
          else
            dataSet = this._data;
        } else {
          this._data = dataSet;
        }
        var data = dataSet.map(function(obj){
          return Number(obj.Value||obj.value);
        });
        var labels = dataSet.map(function(obj){
          return obj.label;
        });
        var colors = dataSet.map(function(obj){
          var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
          if(obj.colorCode===null||obj.colorCode===""||(!regColorcode.test(obj.colorCode)))
          {
            throw {error:"wrong dataType",message:"wrong colorCode for data " + JSON.stringify(obj.colorCode)};
          }
          return obj.colorCode;
        });
        if(this.validateAllParams(this._chartTitle, data, labels, colors)) {
          this.view.PieBrowser.evaluateJavaScript('(new voltmxmp.charts.pie()).Generate_PieChart('+
                                                  JSON.stringify(this._chartTitle)+
                                                  ','+JSON.stringify(labels)+','+
                                                  JSON.stringify(data)+','+
                                                  JSON.stringify(colors)+','+
                                                  JSON.stringify(this._chartProperties)+');');
        }
      }
      catch(exception) {
        voltmxLog.logger.error(JSON.stringify(exception),voltmxLog.logger.EXCEPTION);
        if(exception.error === "wrong dataType")
        {
          throw exception;
        }
      }
    },
    /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
    _validationData: function(data, type) {
      voltmxLog.logger.trace("----------Entering _validationData Function---------", voltmxLog.logger.FUNCTION_ENTRY);
      if(type === 'array') {
        voltmxLog.logger.trace("----------Exiting _validationData Function---------", voltmxLog.logger.FUNCTION_EXIT);
        return Array.isArray(data);
      }
      else if(typeof data === type) {
        voltmxLog.logger.trace("----------Exiting _validationData Function---------", voltmxLog.logger.FUNCTION_EXIT);
        return true;
      }
      else {
        voltmxLog.logger.trace("----------Exiting _validationData Function---------", voltmxLog.logger.FUNCTION_EXIT);
        return false;
      }
    },
    /**
       	 * @function validateAllParams
       	 * @private
       	 * @param {String} title 
       	 * @param {js array} data 
       	 * @param {js array} labels 
       	 * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
       	 */
    validateAllParams: function(title, data, labels, colors) {
      voltmxLog.logger.trace("----------Entering validateAllParams Function---------", voltmxLog.logger.FUNCTION_ENTRY);
      if(!this._validationData(title,'string')) {
        throw {error:"wrong dataType",message:"wrong dataType for title " + title};
      }
      if(!this._validationData(data,'array')) {
        throw {error:"wrong dataType",message:"wrong dataType for data " + JSON.stringify(data)};
      }
      if(!this._validationData(labels,'array')) {
        throw {error:"wrong dataType",message:"wrong dataType for labels " + JSON.stringify(labels)};
      }
      if(!this._validationData(colors,'array')) {
        throw {error:"wrong dataType",message:"wrong dataType for bgColor " + JSON.stringify(colors)};
      }
      voltmxLog.logger.trace("----------Exiting validateAllParams Function---------", voltmxLog.logger.FUNCTION_EXIT);
      return true;
    },
    /**
       * @function
       *@description: called to create using data
       */
    myPostShow : function(){
      try {
        if(this._enableStaticPreview)
        {
          this.createChart(this._data);
          return;
        }
      }
      catch(exception) {
        voltmxLog.logger.error(JSON.stringify(exception),voltmxLog.logger.EXCEPTION);
      }
    }
  };
});