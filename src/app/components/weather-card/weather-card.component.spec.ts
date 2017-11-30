import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WeatherCardComponent } from './weather-card.component'

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent
  let fixture: ComponentFixture<WeatherCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    component.data = {
      'id': 3117735,
      'name': 'Madrid',
      'coord': {
        'lat': 40.4165,
        'lon': -3.7026
      },
      'main': {
        'temp': 11.25,
        'pressure': 1020,
        'humidity': 50,
        'temp_min': 10,
        'temp_max': 13
      },
      'dt': 1511033400,
      'wind': {
        'speed': 0.5
      },
      'sys': {
        'country': 'ES'
      },
      'rain': null,
      'snow': null,
      'clouds': {
        'all': 0
      },
      'weather': [{
        'id': 800,
        'main': 'Clear',
        'description': 'Sky is Clear',
        'icon': '01n'
      }]
    }

    expect(component).toBeTruthy()
  })
})
