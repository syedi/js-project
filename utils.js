var BERLIN3 = BERLIN3 || {};
var floating_window_skin = 1;
// Window variables

// Variable used in functions 
var lastMod = new Object;
var haveChangedRIC = 'no';
var form_data_modified = 'no';
var callback_code = '';

var c_tabTitle;
var c_date_type;
var c_calendar_date_id;
var c_last_modified;
var c_in_object;

var calObjForForm = new DHTMLSuite.calendar({minuteDropDownInterval: 10, numberOfRowsInHourDropDown: 5, callbackFunctionOnDayClick: 'getDateFrom_Cal', isDragable: false, displayTimeBar: false});

var cal_old_value = 'old date';
//
//
