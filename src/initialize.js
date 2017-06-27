require([
    'FarmOverflow/Farm',
    'FarmOverflow/FarmInterface',
    'FarmOverflow/Farm/analytics',
    'FarmOverflow/Queue',
    'FarmOverflow/QueueInterface',
    'FarmOverflow/Queue/analytics',
    'Lockr'
], function (
    Farm,
    FarmInterface,
    FarmAnalytics,
    Queue,
    QueueInterface,
    QueueAnalytics,
    Lockr
) {
    if (Farm.initialized) {
        return false
    } else {
        Farm.initialized = true
    }

    var initialize = function () {
        var $model = injector.get('modelDataService')
        var $player = $model.getSelectedCharacter()

        Lockr.prefix = $player.getId() + '_farmOverflow_'

        farmOverflow = new Farm()
        FarmInterface(farmOverflow)
        FarmAnalytics(farmOverflow, '___farmAnalytics')

        Queue.init()
        QueueInterface()
        QueueAnalytics('___queueAnalytics')
    }

    var $map = document.querySelector('#map')
    var $mapScope = angular.element($map).scope()

    if ($mapScope.isInitialized) {
        initialize()
    } else {
        var $root = angular.element(document).scope()
        var $eventType = injector.get('eventTypeProvider')

        $root.$on($eventType.MAP_INITIALIZED, initialize)
    }
})
