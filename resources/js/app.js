const routeCalcButton = document.querySelector('.route-calculation')
const addSuggestButton = document.querySelector('.add-route')
const fuelConsumption = document.querySelector('[data-fuel-consumption]')
const fuelPrice = document.querySelector('[data-fuel-price]')
const allInputsWrap = document.querySelector('[data-parent-input]')
const result = document.querySelector('.result')


function clearTheMap(myMap) {
    myMap.controls.remove('geolocationControl')
    myMap.controls.remove('searchControl')
    myMap.controls.remove('trafficControl')
    myMap.controls.remove('fullscreenControl')
    myMap.controls.remove('zoomControl')
    myMap.controls.remove('rulerControl')
    myMap.controls.remove('typeSelector')
}


function init() {
    const suggest1 = document.querySelector('[data-point_1]')
    const suggest2 = document.querySelector('[data-point_2]')
    const suggest3 = document.querySelector('[data-point_3]')

    const suggestView1 = new ymaps.SuggestView('point_1')
    const suggestView2 = new ymaps.SuggestView('point_2')
    const suggestView3 = new ymaps.SuggestView('point_3')

    const allSuggestInputs = [suggest1, suggest2, suggest3]
    const allSuggest = [suggestView1, suggestView2, suggestView3]

    const myMap = new ymaps.Map('map', {
        center: [55.750625, 37.626],
        zoom: 5
    })

    const points = []

    function setPoints() {
        allSuggest.forEach(elem => {
            elem.events.add('select', e => {
                points.push(e.get('item').value)
            })
        })
    }


    function createSuggest() {

        const label = document.createElement('label')
        label.classList.add('label-for-new-suggest')

        label.innerHTML = `
        <input type="text" class="form-control new-suggest mb-3" data-point_${allSuggest.length + 1} id="point_${allSuggest.length + 1}" placeholder="Введите адрес"/>
        <i class="fa fa-trash-o mb-3 pl-1" data-point_${allSuggest.length + 1} data-delete="delete"></i>
        `
        allInputsWrap.append(label)

        allSuggest.push(new ymaps.SuggestView(`point_${allSuggest.length + 1}`))
        allSuggestInputs.push(document.querySelector(`[data-point_${allSuggestInputs.length + 1}]`))
        removeSuggest()
        setPoints()
    }


    function removeSuggest() {
        const allSuggestCreatedInputs = document.querySelectorAll('.label-for-new-suggest')
        console.log(allSuggestCreatedInputs.length)
        allSuggestCreatedInputs.forEach(elem => {
            elem.addEventListener('click', e => {
                if (e.target.dataset.delete === "delete")
                    elem.parentNode.removeChild(elem)
            })
        })
    }

    function addRoute() {
        const newPoints = new Set(points)

        ymaps.route([...newPoints])
            .then(router => {
                const length = Math.trunc(Math.round(router.getLength()) / 1000)
                const time = Math.trunc(router.getJamsTime())
                const hours = Math.trunc(time / 3600)
                const minutes = Math.trunc((time - hours * 3600) / 60)
                const fuelOnRoute = Math.trunc(Math.round(Number(fuelConsumption.value / 100) * Number(length)))
                const price = Math.trunc(fuelOnRoute * fuelPrice.value)

                result.innerHTML = `
                        <div>
                            <h5>Расстояние</h5>
                            <span>${length} км</span>
                        </div>
                        <div>
                            <h5>Время</h5>
                            <span>${hours} ч ${minutes} мин</span>
                        </div>
                        <div>
                            <h5>Расход топлива</h5>
                            <span>${fuelOnRoute} л</span>
                        </div>
                        <div>
                            <h5>Стоимость топлива</h5>
                            <span>${price} &#8381;</span>
                        </div>
                `
                allSuggestInputs.forEach(elem => {
                    elem.value = ''
                })

                points.length = 0

            })
    }

    function createRoute() {

        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: points,
                params: {}
            },
            {
                boundsAutoApply: true,
                zoomMargin: 30
            }
        )

        myMap.geoObjects.removeAll(multiRoute)
        myMap.geoObjects.add(multiRoute)

        addRoute()
    }

    addSuggestButton.addEventListener('click', createSuggest)
    routeCalcButton.addEventListener('click', createRoute)
    clearTheMap(myMap)
    setPoints()
}

ymaps.ready(init)
