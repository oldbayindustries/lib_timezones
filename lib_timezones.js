
function timezones_list(){

	return _timezones_list;
}


//
// technique based on this article:
// http://blog.redfin.com/devblog/2007/08/getting_the_time_zone_from_a_web_browser.html
//

function timezones_guess(){

	var so = -1 * new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0)).getTimezoneOffset();
	var wo = -1 * new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0)).getTimezoneOffset();
	var key = so + ':' + wo;

	return _timezones_map[key] ? _timezones_map[key] : 'US/Pacific';
}


var _timezones_map = {
	'-660:-660':	'Pacific/Midway',
	'-600:-600':	'Pacific/Honolulu',
	'-480:-540':	'America/Anchorage',
	'-420:-480':	'America/Los_Angeles',
	'-420:-420':	'America/Phoenix',
	'-360:-420':	'America/Denver',
	'-360:-360':	'America/Regina',
	'-300:-360':	'America/Chicago',
	'-300:-300':	'America/Indiana/Indianapolis',
	'-240:-300':	'America/New_York',
	'-240:-240':	'America/Manaus',
	'-240:-180':	'America/Santiago',
	'-180:-240':	'America/Halifax',
	'-150:-210':	'America/St_Johns',
	'-180:-120':	'America/Sao_Paulo',
	'-180:-180':	'America/Buenos_Aires',
	'-120:-180':	'America/Godthab',
	'-120:-120':	'America/Noronha',
	'0:-60':	'Atlantic/Azores',
	'-60:-60':	'Atlantic/Cape_Verde',
	'60:0':	'Europe/London',
	'0:0':	'Africa/Casablanca',
	'120:60':	'Europe/Amsterdam',
	'60:60':	'Africa/Algiers',
	'60:120':	'Africa/Windhoek',
	'180:120':	'EET',
	'120:120':	'Africa/Harare',
	'240:180':	'Europe/Moscow',
	'180:180':	'Asia/Kuwait',
	'270:210':	'Asia/Tehran',
	'240:240':	'Asia/Muscat',
	'300:240':	'Asia/Baku',
	'270:270':	'Asia/Kabul',
	'300:300':	'Asia/Karachi',
	'330:330':	'Asia/Kolkata',
	'360:360':	'Asia/Dhaka',
	'345:345':	'Asia/Katmandu',
	'360:300':	'Asia/Yekaterinburg',
	'390:390':	'Asia/Rangoon',
	'420:420':	'Asia/Bangkok',
	'420:360':	'Asia/Novosibirsk',
	'480:480':	'Asia/Chongqing',
	'480:420':	'Asia/Krasnoyarsk',
	'540:480':	'Asia/Ulaanbaatar',
	'540:540':	'Asia/Tokyo',
	'570:630':	'Australia/Adelaide',
	'570:570':	'Australia/Darwin',
	'600:600':	'Australia/Brisbane',
	'600:660':	'Australia/Canberra',
	'600:540':	'Asia/Yakutsk',
	'660:660':	'Pacific/Guadalcanal',
	'660:600':	'Asia/Vladivostok',
	'720:780':	'Pacific/Auckland',
	'720:720':	'Pacific/Fiji',
	'720:660':	'Asia/Magadan',
	'780:780':	'Pacific/Tongatapu'
};

var _timezones_list = [
	["(GMT-11:00) Midway Island, Samoa", 'Pacific/Midway'],
	["(GMT-10:00) Hawaii", 'Pacific/Honolulu'],
	["(GMT-09:00) Alaska", 'America/Anchorage'],
	["(GMT-08:00) Baja California", 'America/Tijuana'],
	["(GMT-08:00) Pacific Time (US and Canada)", 'America/Los_Angeles'],
	["(GMT-07:00) Arizona", 'America/Phoenix'],
	["(GMT-07:00) Chihuahua, La Paz, Mazatlan", 'America/Chihuahua'],
	["(GMT-07:00) Mountain Time (US and Canada)", 'America/Denver'],
	["(GMT-06:00) Central America", 'America/Belize'],
	["(GMT-06:00) Central Time (US and Canada)	", 'America/Chicago'],
	["(GMT-06:00) Guadalajara, Mexico City, Monterrey", 'America/Mexico_City'],
	["(GMT-06:00) Saskatchewan", 'America/Regina'],
	["(GMT-05:00) Bogota, Lima, Quito", 'America/Bogota'],
	["(GMT-05:00) Eastern Time (US and Canada)", 'America/New_York'],
	["(GMT-05:00) Indiana (East)", 'America/Indiana/Indianapolis'],
	["(GMT-04:30) Caracas", 'America/Caracas'],
	["(GMT-04:00) Asuncion", 'America/Asuncion'],
	["(GMT-04:00) Atlantic Time (Canada)", 'America/Halifax'],
	["(GMT-04:00) Cuiaba", 'America/Cuiaba'],
	["(GMT-04:00) Georgetown, La Paz, Manaus, San Juan", 'America/Manaus'],
	["(GMT-04:00) Santiago", 'America/Santiago'],
	["(GMT-03:30) Newfoundland and Labrador", 'America/St_Johns'],
	["(GMT-03:00) Brasilia", 'America/Sao_Paulo'],
	["(GMT-03:00) Buenos Aires	", 'America/Buenos_Aires'],
	["(GMT-03:00) Cayenne, Fortaleza", 'America/Cayenne'],
	["(GMT-03:00) Greenland", 'America/Godthab'],
	["(GMT-03:00) Montevideo", 'America/Montevideo'],
	["(GMT-03:00) Salvador", 'America/Bahia'],
	["(GMT-02:00) Mid-Atlantic", 'America/Noronha'],
	["(GMT-01:00) Azores", 'Atlantic/Azores'],
	["(GMT-01:00) Cape Verde Islands", 'Atlantic/Cape_Verde'],
	["(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London", 'Europe/London'],
	["(GMT) Casablanca, Monrovia", 'Africa/Casablanca'],
	["(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", 'Europe/Amsterdam'],
	["(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", 'Europe/Belgrade'],
	["(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", 'Europe/Brussels'],
	["(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", 'Europe/Warsaw'],
	["(GMT+01:00) West Central Africa", 'Africa/Algiers'],
	["(GMT+01:00) Windhoek", 'Africa/Windhoek'],
	["(GMT+02:00) Athens, Bucharest", 'Europe/Athens'],
	["(GMT+02:00) Beirut", 'Asia/Beirut'],
	["(GMT+02:00) Cairo", 'Africa/Cairo'],
	["(GMT+02:00) Damascus", 'Asia/Damascus'],
	["(GMT+02:00) Eastern Europe", 'EET'],
	["(GMT+02:00) Harare, Pretoria", 'Africa/Harare'],
	["(GMT+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius", 'Europe/Helsinki'],
	["(GMT+02:00) Istanbul", 'Asia/Istanbul'],
	["(GMT+02:00) Jerusalem", 'Asia/Jerusalem'],
	["(GMT+03:00) Amman", 'Asia/Amman'],
	["(GMT+03:00) Baghdad", 'Asia/Baghdad'],
	["(GMT+03:00) Kalinigrad, Minsk", 'Europe/Kaliningrad'],
	["(GMT+03:00) Kuwait, Riyadh", 'Asia/Kuwait'],
	["(GMT+03:00) Nairobi", 'Africa/Nairobi'],
	["(GMT+03:30) Tehran", 'Asia/Tehran'],
	["(GMT+04:00) Abu Dhabi, Muscat", 'Asia/Muscat'],
	["(GMT+04:00) Baku", 'Asia/Baku'],
	["(GMT+04:00) Moscow, St. Petersburg, Volgograd", 'Europe/Moscow'],
	["(GMT+04:00) Port Louis", 'Indian/Mauritius'],
	["(GMT+04:00) Tblisi", 'Asia/Tbilisi'],
	["(GMT+04:00) Yerevan", 'Asia/Yerevan'],
	["(GMT+04:30) Kabul", 'Asia/Kabul'],
	["(GMT+05:00) Islamabad, Karachi", 'Asia/Karachi'],
	["(GMT+05:00) Tashkent", 'Asia/Tashkent'],
	["(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi", 'Asia/Kolkata'],
	["(GMT+05:30) Sri Jayawardenepura", 'Asia/Colombo'],
	["(GMT+05:45) Kathmandu", 'Asia/Katmandu'],
	["(GMT+06:00) Astana", 'Asia/Almaty'],
	["(GMT+06:00) Dhaka", 'Asia/Dhaka'],
	["(GMT+06:00) Ekaterinburg", 'Asia/Yekaterinburg'],
	["(GMT+06:30) Yangon (Rangoon)", 'Asia/Rangoon'],
	["(GMT+07:00) Bangkok, Hanoi, Jakarta", 'Asia/Bangkok'],
	["(GMT+07:00) Novosibirsk", 'Asia/Novosibirsk'],
	["(GMT+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi", 'Asia/Chongqing'],
	["(GMT+08:00) Krasnoyarsk", 'Asia/Krasnoyarsk'],
	["(GMT+08:00) Kuala Lumpur, Singapore", 'Asia/Kuala_Lumpur'],
	["(GMT+08:00) Perth", 'Australia/Perth'],
	["(GMT+08:00) Taipei", 'Asia/Taipei'],
	["(GMT+08:00) Ulaanbaatar", 'Asia/Ulaanbaatar'],
	["(GMT+09:00) Irkutsk", 'Asia/Irkutsk'],
	["(GMT+09:00) Osaka, Sapporo, Tokyo", 'Asia/Tokyo'],
	["(GMT+09:00) Seoul", 'Asia/Seoul'],
	["(GMT+09:30) Adelaide", 'Australia/Adelaide'],
	["(GMT+09:30) Darwin", 'Australia/Darwin'],
	["(GMT+10:00) Brisbane", 'Australia/Brisbane'],
	["(GMT+10:00) Canberra, Melbourne, Sydney", 'Australia/Canberra'],
	["(GMT+10:00) Guam, Port Moresby", 'Pacific/Guam'],
	["(GMT+10:00) Hobart", 'Australia/Hobart'],
	["(GMT+10:00) Yakutsk", 'Asia/Yakutsk'],
	["(GMT+11:00) Solomon Islands, New Caledonia", 'Pacific/Guadalcanal'],
	["(GMT+11:00) Vladivostok", 'Asia/Vladivostok'],
	["(GMT+12:00) Auckland, Wellington", 'Pacific/Auckland'],
	["(GMT+12:00) Fiji Islands, Kamchatka, Marshall Islands", 'Pacific/Fiji'],
	["(GMT+12:00) Magadan", 'Asia/Magadan'],
	["(GMT+13:00) Nuku'alofa", 'Pacific/Tongatapu'],
	["(GMT+13:00) Samoa", 'Pacific/Apia']
];
