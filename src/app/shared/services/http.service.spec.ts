import { HttpService } from "./http.service"
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpService', () => {
  let httpService: HttpService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientTestingModule]
    })

    http = TestBed.inject(HttpClient);
    httpService = new HttpService(http);
  })

  it('should create', () => {
    expect(httpService).toBeTruthy();
  })
})
