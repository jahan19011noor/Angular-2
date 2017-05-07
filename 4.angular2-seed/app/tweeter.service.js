System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweeterService;
    return {
        setters: [],
        execute: function () {
            TweeterService = (function () {
                function TweeterService() {
                }
                TweeterService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            author: "Windward",
                            handle: '@windwardstudios',
                            body: 'Looking for a better company reporting or decgen app?',
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            author: "Angular JS News",
                            handle: '@angularjs_news',
                            body: 'Right Relevance : Influencers, Articles and Conversations',
                            totalLikes: 5,
                            iLike: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            author: "UX & Bootstrap",
                            handle: '@3rdwave',
                            body: '10 Reasons why Web Projects Fail',
                            totalLikes: 1,
                            iLike: false
                        }
                    ];
                };
                return TweeterService;
            }());
            exports_1("TweeterService", TweeterService);
        }
    };
});
//# sourceMappingURL=tweeter.service.js.map