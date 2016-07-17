var sse = (function() {
    'use strict';

    var _evtSource = new EventSource("testSse.php"),
        _aeo = {}, // abstract event object

        _reactor = function(event_id, e_) {
            var model = JSON.parse(e_.data);

        },

        _subscribe = function(in_) {

            var _elem = document.getElementById(in_.element_id),
                event_channel,
                elements;

            if (false === _aeo.hasOwnProperty(in_.event_id)) {
                _aeo[in_.event_id] = {
                    elements: []
                };
            }

            elements = _aeo[in_.event_id].elements;

            elements.push({
                elem:_elem
            });

            _evtSource.addEventListener(in_.event_id, function(e_) {
                var model = JSON.parse(e_.data);
                _elem.innerHTML = model[in_.model_id];

            }, false);
        },
        _stop = function() {
            _evtSource.close();
            _evtSource = undefined;
        },
        _start = function() {

        };

    return {
        subscribe: _subscribe,
        start: _start,
        stop: _stop
    };

})();

sse.subscribe({ event_id: 'ping', element_id: 'iping', model_id: 'count', action_id: 'label' });
sse.subscribe({ event_id: 'ping', element_id: 'iping2', model_id: 'count', action_id: 'label' });
sse.subscribe({ event_id: 'ping', element_id: 'iping3', model_id: 'count', action_id: 'label' });
sse.subscribe({ event_id: 'ping', element_id: 'iping4', model_id: 'count', action_id: 'label' });
