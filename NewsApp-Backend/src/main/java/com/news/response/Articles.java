package com.news.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class Articles {

	
	private Source source;
	
	private String author;
	
	private String title;
	
	private String description;
	
	private String url;
	
	private String urlToImage;
	
	private String publishedAt;
	
	private String content;

}
