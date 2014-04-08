
// for namespace
pushpinIcons = new Object;

// assortment of colors to use for pushpin icons
pushpinIcons.colors = [
	{ hexColor:'8B0000', name:'darkred' },
	{ hexColor:'FF0000', name:'red' },
	{ hexColor:'FFB6C1', name:'lightpink' },
	{ hexColor:'DC143C', name:'crimson' },
	{ hexColor:'FF69B4', name:'hotpink' },
	{ hexColor:'FF1493', name:'deeppink' },
	{ hexColor:'800080', name:'purple' },
	{ hexColor:'EE82EE', name:'violet' },
	{ hexColor:'FF00FF', name:'magenta' },
	{ hexColor:'9400D3', name:'darkviolet' },
	{ hexColor:'9370DB', name:'mediumpurple' },
	{ hexColor:'0000FF', name:'blue' },
	{ hexColor:'000080', name:'navy' },
	{ hexColor:'4169E1', name:'royalblue' },
	{ hexColor:'E6E6FA', name:'lavender' },
	{ hexColor:'4682B4', name:'steelblue' },
	{ hexColor:'00BFFF', name:'deepskyblue' },
	{ hexColor:'00FFFF', name:'aqua' },
	{ hexColor:'20B2AA', name:'lightseagreen' },
	{ hexColor:'40E0D0', name:'turquoise' },
	{ hexColor:'B0E0E6', name:'powderblue' },
	{ hexColor:'2F4F4F', name:'darkslategray' },
	{ hexColor:'00FA9A', name:'mediumspringgreen' },
	{ hexColor:'32CD32', name:'limegreen' },
	{ hexColor:'228B22', name:'forestgreen' },
	{ hexColor:'8FBC8F', name:'darkseagreen' },
	{ hexColor:'90EE90', name:'lightgreen' },
	{ hexColor:'556B2F', name:'darkolivegreen' },
	{ hexColor:'9ACD32', name:'yellowgreen' },
	{ hexColor:'ADFF2F', name:'greenyellow' },
	{ hexColor:'808000', name:'olive' },
	{ hexColor:'FFFF00', name:'yellow' },
	{ hexColor:'BDB76B', name:'darkkhaki' },
	{ hexColor:'F0E68C', name:'khaki' },
	{ hexColor:'FFD700', name:'gold' },
	{ hexColor:'DAA520', name:'goldenrod' },
	{ hexColor:'FFDEAD', name:'navajowhite' },
	{ hexColor:'FFA500', name:'orange' },
	{ hexColor:'D2B48C', name:'tan' },
	{ hexColor:'DEB887', name:'burlywood' },
	{ hexColor:'F4A460', name:'sandybrown' },
	{ hexColor:'FFEBCD', name:'blanchedalmond' },
	{ hexColor:'FFF0F5', name:'lavenderblush' },
	{ hexColor:'CD853F', name:'peru' },
	{ hexColor:'FFDAB9', name:'peachpuff' },
	{ hexColor:'D2691E', name:'chocolate' },
	{ hexColor:'A0522D', name:'sienna' },
	{ hexColor:'FFA07A', name:'lightsalmon' },
	{ hexColor:'FA8072', name:'salmon' },
	{ hexColor:'FF6347', name:'tomato' },
	{ hexColor:'FFC0CB', name:'pink' },
	{ hexColor:'CD5C5C', name:'indianred' },
	{ hexColor:'A52A2A', name:'brown' },
	{ hexColor:'000000', name:'black' },
	{ hexColor:'808080', name:'gray' },
	{ hexColor:'D3D3D3', name:'lightgrey' },
	{ hexColor:'FFFFFF', name:'white' }
];

// shuffles an array
pushpinIcons.shuffle = function (arr) {
    var tmp, current, top = arr.length;
    if(top) while(--top) {
    	current = Math.floor(Math.random() * (top + 1));
    	tmp = arr[current];
    	arr[current] = arr[top];
    	arr[top] = tmp;
    }
    return arr;
};

// shuffled array of pushpin icon colors
pushpinIcons.shuffledColors = pushpinIcons.colors.slice(0);
pushpinIcons.shuffledColors = pushpinIcons.shuffle( pushpinIcons.shuffledColors );

// base URL to get google map pushpin icons
pushpinIcons.basePushpinURL = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='

// get URL of pushpin icon with array index
pushpinIcons.getPushpinIconUrl = function (colorIdx, char) {
	if (!char) {
		var char = '%E2%80%A2';
	}
	return pushpinIcons.basePushpinURL + char + '|' + pushpinIcons.colors[colorIdx].hexColor;
}

// get URL of pushpin icon with array index of shuffled colors
pushpinIcons.getShuffledPushpinIconUrl = function (colorIdx, char) {
	if (!char) {
		var char = '%E2%80%A2';
	}
	return pushpinIcons.basePushpinURL + char + '|' + pushpinIcons.shuffledColors[colorIdx].hexColor;
}

