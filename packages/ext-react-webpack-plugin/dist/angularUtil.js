"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateOptions = getValidateOptions;
exports.getDefaultOptions = getDefaultOptions;
exports.getDefaultVars = getDefaultVars;
exports.extractFromSource = extractFromSource;

function getValidateOptions() {
  return {
    "type": "object",
    "properties": {
      "framework": {
        "type": ["string"]
      },
      "port": {
        "type": ["integer"]
      },
      "emit": {
        "type": ["boolean"]
      },
      "browser": {
        "type": ["boolean"]
      },
      "profile": {
        "type": ["string"]
      },
      "environment": {
        "type": ["string"]
      },
      "verbose": {
        "type": ["string"]
      },
      "theme": {
        "type": ["string"]
      },
      "toolkit": {
        "type": ["string"]
      },
      "packages": {
        "type": ["string", "array"]
      }
    },
    "additionalProperties": false // "errorMessage": {
    //   "option": "should be {Boolean} (https:/github.com/org/repo#anchor)"
    // }

  };
}

function getDefaultOptions() {
  return {
    port: 1962,
    emit: true,
    browser: true,
    profile: '',
    environment: 'development',
    verbose: 'no',
    toolkit: 'modern',
    packages: null
  };
}

function getDefaultVars() {
  return {
    firstTime: true,
    firstCompile: true,
    browserCount: 0,
    manifest: null,
    extPath: 'ext-angular',
    pluginErrors: [],
    deps: [],
    rebuild: true
  };
}

function toXtype(str) {
  return str.toLowerCase().replace(/_/g, '-');
}

function extractFromSource(module, options, compilation) {
  try {
    var js = module._source._value;

    const logv = require('./pluginUtil').logv;

    logv(options, 'FUNCTION extractFromSource');
    var statements = [];
    var prefix = '<ext-';

    for (var i = 0; i < js.length; ++i) {
      if (js.substring(i, i + prefix.length) == prefix) {
        var start = js.substring(i);
        var end = start.indexOf(' ');
        var xtype = start.substring(prefix.length, end);
        var type = {
          xtype: toXtype(xtype)
        };
        let config = JSON.stringify(type);
        statements.push(`Ext.create(${config})`);
      }
    }

    return statements;
  } catch (e) {
    console.log(e);
    compilation.errors.push('extractFromSource: ' + e);
    return [];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmd1bGFyVXRpbC5qcyJdLCJuYW1lcyI6WyJnZXRWYWxpZGF0ZU9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInBvcnQiLCJlbWl0IiwiYnJvd3NlciIsInByb2ZpbGUiLCJlbnZpcm9ubWVudCIsInZlcmJvc2UiLCJ0b29sa2l0IiwicGFja2FnZXMiLCJnZXREZWZhdWx0VmFycyIsImZpcnN0VGltZSIsImZpcnN0Q29tcGlsZSIsImJyb3dzZXJDb3VudCIsIm1hbmlmZXN0IiwiZXh0UGF0aCIsInBsdWdpbkVycm9ycyIsImRlcHMiLCJyZWJ1aWxkIiwidG9YdHlwZSIsInN0ciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImV4dHJhY3RGcm9tU291cmNlIiwibW9kdWxlIiwib3B0aW9ucyIsImNvbXBpbGF0aW9uIiwianMiLCJfc291cmNlIiwiX3ZhbHVlIiwibG9ndiIsInJlcXVpcmUiLCJzdGF0ZW1lbnRzIiwicHJlZml4IiwiaSIsImxlbmd0aCIsInN1YnN0cmluZyIsInN0YXJ0IiwiZW5kIiwiaW5kZXhPZiIsInh0eXBlIiwidHlwZSIsImNvbmZpZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU8sU0FBU0Esa0JBQVQsR0FBOEI7QUFDbkMsU0FBTztBQUNMLFlBQVEsUUFESDtBQUVMLGtCQUFjO0FBQ1osbUJBQWU7QUFBQyxnQkFBUSxDQUFFLFFBQUY7QUFBVCxPQURIO0FBRVosY0FBZTtBQUFDLGdCQUFRLENBQUUsU0FBRjtBQUFULE9BRkg7QUFHWixjQUFlO0FBQUMsZ0JBQVEsQ0FBRSxTQUFGO0FBQVQsT0FISDtBQUlaLGlCQUFlO0FBQUMsZ0JBQVEsQ0FBRSxTQUFGO0FBQVQsT0FKSDtBQUtaLGlCQUFlO0FBQUMsZ0JBQVEsQ0FBRSxRQUFGO0FBQVQsT0FMSDtBQU1aLHFCQUFlO0FBQUMsZ0JBQVEsQ0FBRSxRQUFG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QVo7QUFDQXBCLElBQUFBLFdBQVcsQ0FBQ3VCLE1BQVosQ0FBbUJKLElBQW5CLENBQXdCLHdCQUF3QkMsQ0FBaEQ7QUFDQSxXQUFPLEVBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRlT3B0aW9ucygpIHtcbiAgcmV0dXJuIHtcbiAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgXCJmcmFtZXdvcmtcIjogICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwicG9ydFwiOiAgICAgICAge1widHlwZVwiOiBbIFwiaW50ZWdlclwiIF19LFxuICAgICAgXCJlbWl0XCI6ICAgICAgICB7XCJ0eXBlXCI6IFsgXCJib29sZWFuXCIgXX0sXG4gICAgICBcImJyb3dzZXJcIjogICAgIHtcInR5cGVcIjogWyBcImJvb2xlYW5cIiBdfSxcbiAgICAgIFwicHJvZmlsZVwiOiAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcImVudmlyb25tZW50XCI6IHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJ2ZXJib3NlXCI6ICAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwidGhlbWVcIjogICAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcInRvb2xraXRcIjogICAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJwYWNrYWdlc1wiOiAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiwgXCJhcnJheVwiIF19XG4gICAgfSxcbiAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgLy8gXCJlcnJvck1lc3NhZ2VcIjoge1xuICAgIC8vICAgXCJvcHRpb25cIjogXCJzaG91bGQgYmUge0Jvb2xlYW59IChodHRwczovZ2l0aHViLmNvbS9vcmcvcmVwbyNhbmNob3IpXCJcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4ge1xuICAgIHBvcnQ6IDE5NjIsXG4gICAgZW1pdDogdHJ1ZSxcbiAgICBicm93c2VyOiB0cnVlLFxuICAgIHByb2ZpbGU6ICcnLCBcbiAgICBlbnZpcm9ubWVudDogJ2RldmVsb3BtZW50JywgXG4gICAgdmVyYm9zZTogJ25vJyxcbiAgICB0b29sa2l0OiAnbW9kZXJuJyxcbiAgICBwYWNrYWdlczogbnVsbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VmFycygpIHtcbiAgcmV0dXJuIHtcbiAgICBmaXJzdFRpbWUgOiB0cnVlLFxuICAgIGZpcnN0Q29tcGlsZTogdHJ1ZSxcbiAgICBicm93c2VyQ291bnQgOiAwLFxuICAgIG1hbmlmZXN0OiBudWxsLFxuICAgIGV4dFBhdGg6ICdleHQtYW5ndWxhcicsXG4gICAgcGx1Z2luRXJyb3JzOiBbXSxcbiAgICBkZXBzOiBbXSxcbiAgICByZWJ1aWxkOiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9YdHlwZShzdHIpIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJy0nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbikge1xuICB0cnkge1xuICAgIHZhciBqcyA9IG1vZHVsZS5fc291cmNlLl92YWx1ZVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBleHRyYWN0RnJvbVNvdXJjZScpXG4gICAgdmFyIHN0YXRlbWVudHMgPSBbXVxuICAgIHZhciBwcmVmaXggPSAnPGV4dC0nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGpzLnN1YnN0cmluZyhpLCBpICsgcHJlZml4Lmxlbmd0aCkgPT0gcHJlZml4KSB7XG4gICAgICAgIHZhciBzdGFydCA9IGpzLnN1YnN0cmluZyhpKVxuICAgICAgICB2YXIgZW5kID0gc3RhcnQuaW5kZXhPZignICcpXG4gICAgICAgIHZhciB4dHlwZSA9IHN0YXJ0LnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoLGVuZClcbiAgICAgICAgdmFyIHR5cGUgPSB7IHh0eXBlOiB0b1h0eXBlKHh0eXBlKSB9XG4gICAgICAgIGxldCBjb25maWcgPSBKU09OLnN0cmluZ2lmeSh0eXBlKVxuICAgICAgICBzdGF0ZW1lbnRzLnB1c2goYEV4dC5jcmVhdGUoJHtjb25maWd9KWApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZW1lbnRzXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2V4dHJhY3RGcm9tU291cmNlOiAnICsgZSlcbiAgICByZXR1cm4gW11cbiAgfVxufVxuIl19