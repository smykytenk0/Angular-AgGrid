import { HttpService } from "./http.service"
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpService],
      imports: [HttpClientTestingModule]
    })
    httpService = TestBed.inject(HttpService);
  })

  it('should create', () => {
    expect(httpService).toBeTruthy();
  })

  it('getVideosData() should work', () => {
    const spy = spyOn(httpService, 'getVideosData').and.callThrough();

    httpService.getVideosData();

    expect(spy).toHaveBeenCalledTimes(1);
  })
})
