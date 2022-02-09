import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost';
import { Pagination } from '../models/Pagination';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'myblogAngular';

  pagination: Pagination = new Pagination;
  blogPosts: BlogPost[] = [];

  constructor(
    private http: HttpClient, private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.loadPage(x['page'] || 1));
  }
  loadPage(page: any) {
    this.http.get<any>(` ${environment.BASE_API_URL}/blog/posts?page=${page}`).subscribe(x => {
        this.pagination = x['pagination'];
        this.blogPosts = x['blogPosts'];
      });
  }



}
