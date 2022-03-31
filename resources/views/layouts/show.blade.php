@extends('layouts.admin')
@section('content')

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6" style="float:left;">
                    <h4>{{ $pointload->id }} - {{ $pointload->title }}</h4>
                </div>
                <div class="col-6" style="float:right;">
                    @can('pointload_edit')
                        <a style="float:right;" class="" href="{{ route('admin.pointloads.edit', $pointload->id) }}">
                            <i class="fa fa-pen" aria-hidden="true"></i>
                        </a>
                    @endcan
                </div>
            </div>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-4">
                            <label for="email">{{ trans('cruds.pointload.fields.country') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->country->name ?? '' }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.region') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->region }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email">{{ trans('cruds.pointload.fields.gorod') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->gorod }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.zip') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->zip }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.ulitca') }}* :</label>
                        </div>
                        <div class="col-8" id="ulitca">
                            {{ $pointload->ulitca }}, {{ $pointload->dom }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.komment') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->komment }}
                        </div>
                    </div>
                    <div id="long" style="display:none;">
                        {{ $pointload->long }}
                    </div>
                    <div id="lat" style="display:none;">
                        {{ $pointload->lat }}
                    </div>
                    <div class="row" style="display:none;">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.type') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ App\Models\Pointload::TYPE_SELECT[$pointload->type] ?? '' }}
                        </div>
                    </div>
                <!--
<div class="row">
    <div class="col-4">
        <label for="email"> {{ trans('cruds.pointload.fields.komuperevozklient') }}* :</label>
    </div>
    <div class="col-8">
        {{ $pointload->komuperevozklient->title ?? '' }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label for="email"> {{ trans('cruds.pointload.fields.komuzakazklient') }}* :</label>
    </div>
    <div class="col-8">
        {{ $pointload->komuzakazklient->title ?? '' }}
                    </div>
                </div>
-->
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.innfio') }}* :</label>
                        </div>
                        <div class="col-8" id="innfio">
                            {{ $pointload->innfio }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.fioload') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->fioload }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.mobileload') }}* :</label>
                        </div>
                        <div class="col-8">
                            {{ $pointload->mobileload }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> ПН* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->pnot }} - {{ $pointload->pndo }}, {{ $pointload->pnbrot }}
                            - {{ $pointload->pnbrdo }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> ВТ* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->thot }} - {{ $pointload->thdo }}, {{ $pointload->thbrot }}
                            - {{ $pointload->thbrdo }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> СР* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->wedot }} - {{ $pointload->weddo }}, {{ $pointload->wedbrot }}
                            - {{ $pointload->wedbrto }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> ЧТ* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->thuot }} - {{ $pointload->thudo }}, {{ $pointload->thubrot }}
                            - {{ $pointload->thubrdo }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> ПТ* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->friot }} - {{ $pointload->frido }}, {{ $pointload->fribrot }}
                            - {{ $pointload->fribrdo }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> СБ* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->satot }} - {{ $pointload->satdo }}, {{ $pointload->satbrot }}
                            - {{ $pointload->satbrdo }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="email"> ВС* :</label>
                        </div>
                        <div class="col-10">
                            {{ $pointload->sunot }} - {{ $pointload->sundo }}, {{ $pointload->sunbrot }}
                            - {{ $pointload->sunbrdo }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="email"> {{ trans('cruds.pointload.fields.holidayli') }}* :</label>
                        </div>
                        <div class="col-8">
                            @foreach($pointload->holidaylis as $key => $holidayli)
                                <span class="label label-info">{{ $holidayli->date }}</span>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="col-6">

                    {{ trans('cruds.pointload.fields.hemaproezda') }}
                    <br>


                    @foreach($pointload->hemaproezda as $key => $media)
                        <a href="{{ $media->getUrl() }}" target="_blank" style="display: inline-block">
                            <img src="{{ $media->getUrl('thumb') }}">
                        </a>
                    @endforeach


                    <script>


                        function init() {
                            const lat = document.getElementById("lat").innerHTML
                            const long = document.getElementById("long").innerHTML
                            const innFio = document.getElementById("innfio").innerHTML

                            const myMap = new ymaps.Map("map", {
                                    center: [lat, long],
                                    zoom: 10
                                }, {
                                    searchControlProvider: 'yandex#search'
                                }),

                                // Создаем геообъект с типом геометрии "Точка".
                                myPieChart = new ymaps.Placemark([
                                        55.847, 37.6
                                    ], {
                                        data: [
                                            {weight: 8, color: '#0E4779'},
                                            {weight: 6, color: '#1E98FF'},
                                            {weight: 4, color: '#82CDFF'}
                                        ],
                                        iconCaption: "Диаграмма"
                                    },
                                    {
                                        // Зададим произвольный макет метки.
                                        iconLayout: 'default#pieChart',
                                        // Радиус диаграммы в пикселях.
                                        iconPieChartRadius: 30,
                                        // Радиус центральной части макета.
                                        iconPieChartCoreRadius: 10,
                                        // Стиль заливки центральной части.
                                        iconPieChartCoreFillStyle: '#ffffff',
                                        // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
                                        iconPieChartStrokeStyle: '#ffffff',
                                        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
                                        iconPieChartStrokeWidth: 3,
                                        // Максимальная ширина подписи метки.
                                        iconPieChartCaptionMaxWidth: 200
                                    })

                            const myPlacemark = new ymaps.Placemark([lat, long], {
                                //balloonContent: 'цвет <strong>носика Гены</strong>',
                                balloonContent: innFio,
                                iconCaption: innFio
                            }, {
                                preset: 'islands#blueDotIconWithCaption'
                            })

                            myMap.geoObjects
                                .add(myPlacemark)
                                .add(myPieChart)
                        }

                        ymaps.ready(init)
                    </script>
                    <style>
                        html, body, #map {
                            width: 100%;
                            height: 100%;
                            padding: 0;
                            margin: 0;
                        }
                    </style>
                    <div id="map" style="display:none;"></div>

                </div>
            </div>


        </div>
    </div>

@endsection
