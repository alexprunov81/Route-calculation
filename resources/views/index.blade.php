@extends('layouts.main-layout')

@section('title', 'RouterMap')

@section('content')

    <div class="sidebar-wrapper___diY63">
        <div tabindex="0" class="_2epoV-2-0-156 sidebar___3fA8_ filter-sidebar___3ojh0">
            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="sidebar-sticky pt-3">

                            <div data-parent-input>
                                <label style="font-weight: bold;" for="point_1">Откуда</label>
                                <input type="text" class="form-control suggest mb-3" data-point_1 id="point_1"
                                       placeholder="Введите адрес"/>

                                <label style="font-weight: bold;" for="point_2">Куда</label>
                                <input type="text" class="form-control suggest mb-3" data-point_2 id="point_2"
                                       placeholder="Введите адрес"/>
                                <div>
                                    <label for="point_3">Через</label>
                                    <input type="text" class="form-control suggest mb-3" data-point_3 id="point_3"
                                           placeholder="Введите адрес"/>
                                </div>

                            </div>
                            <div>
                                <button type="button" class="add-route btn btn-success mb-3">Добавить точку</button>
                            </div>
                            <div class="calculation">
                                <div class="inputs">
                                    <div class="block">
                                        <div class="element">
                                            <span class="primaryLabel">Расход топлива</span>
                                            <span class="label">На 100 км</span>
                                            <div>
                                                <div class="input">
                                                    <div>
                                                        <label>
                                                            <input name="fuel-consumption" maxlength="3" type="text"
                                                                   placeholder="0" data-fuel-consumption>
                                                        </label>
                                                    </div>
                                                </div>
                                                <span class="liters">л</span>
                                            </div>
                                        </div>
                                        <div class="element">
                                            <span class="primaryLabel">Стоимость</span>
                                            <span class="label">За литр топлива</span>
                                            <div>
                                                <div class="input">
                                                    <div>
                                                        <label>
                                                            <input name="fuel-price" maxlength="3" type="text"
                                                                   placeholder="0" data-fuel-price>
                                                        </label>
                                                    </div>
                                                </div>
                                                <span class="liters">&#8381;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="route-calculation btn btn-success mb-3">Расчитать маршрут</button>
                        <div class="result">

                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Расчет маршрута</h1>
                        </div>

                        <div id="map" style="width: 100%; height: 100%;"></div>

                    </main>
                </div>
            </div>
        </div>
    </div>

@endsection


