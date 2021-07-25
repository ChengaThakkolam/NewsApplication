package com.news.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.news.response.ArticlesResponse;

@RestController
@RequestMapping("/news")
public class NewsApiController {

	String key="";
	String everythingNewsApi="https://newsapi.org/v2/everything?q=bitcoin&apiKey="+key;
	
	@GetMapping("/hello")
	String hello() {
		
		return "hello";
	}
	
	
	@GetMapping("/hi")
	protected String hi() {
		
		return "hi";
	}
	
	
	@GetMapping("/say")
	private String sayHello() {
		
		return "sayHello";
	}
	
	
	//top headings
	
	@GetMapping("/topheadings")
	public ArticlesResponse newsPaperTopHeadings() {
		String url="https://newsapi.org/v2/top-headlines?country=in&apiKey="+key;
		RestTemplate template=new RestTemplate();
		
		ResponseEntity<ArticlesResponse> forObject = template.getForEntity(url, ArticlesResponse.class);
		
		ArticlesResponse body = forObject.getBody();
		
		
		
		return  body;
	}
	
	// Everything news
	
		@GetMapping("/everything")
		public ArticlesResponse newsPaperEverything() {
			
			RestTemplate template=new RestTemplate();
			
			ResponseEntity<ArticlesResponse> forObject = template.getForEntity(everythingNewsApi, ArticlesResponse.class);
			
			ArticlesResponse body = forObject.getBody();
			
			
			
			return  body;
		}
		
		// business News

		String businessNews="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="+key;
		
			@GetMapping("/business")
			public ArticlesResponse newsPaperBusiness() {
				
				RestTemplate template=new RestTemplate();
				
				ResponseEntity<ArticlesResponse> forObject = template.getForEntity(businessNews, ArticlesResponse.class);
				
				ArticlesResponse body = forObject.getBody();
				
				
				
				return  body;
			}
			
			// sports News

			String sportsNews="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="+key;
			
				@GetMapping("/sports")
				public ArticlesResponse newsPaperSports() {
					
					RestTemplate template=new RestTemplate();
					
					ResponseEntity<ArticlesResponse> forObject = template.getForEntity(sportsNews, ArticlesResponse.class);
					
					ArticlesResponse body = forObject.getBody();
					
					
					
					return  body;
				}

				
//				science News

				String scienceNews="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="+key;
				
					@GetMapping("/science")
					public ArticlesResponse newsPaperScience() {
						
						RestTemplate template=new RestTemplate();
						
						ResponseEntity<ArticlesResponse> forObject = template.getForEntity(scienceNews, ArticlesResponse.class);
						
						ArticlesResponse body = forObject.getBody();
						
						
						
						return  body;
					}

}
