package com.trys.tsibproject.dto;

public class BoardDTO {
    // PostPage save Params
    private String title;
    private String media;
    private String tag;
    private String content;

    // PostPage save Getter
    public String getTitle() {return title;}
    public String getMedia() {return media;}
    public String getTag() {return tag;}
    public String getContent() {return content;}

    // PostPage save Setter
    public void setTitle(String title) {this.title = title;}
    public void setMedia(String media) {this.media = media;}
    public void setTag(String tag) {this.tag = tag;}
    public void setContent(String content) {this.content = content;}
}
