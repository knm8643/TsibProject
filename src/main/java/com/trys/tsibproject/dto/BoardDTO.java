package com.trys.tsibproject.dto;

public class BoardDTO {

    private String userName;

    // 오른쪽 클릭 command + n 개터새터 자동 생성 단축키
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }

    // PostPage Params
    private String title;
    private String media;
    private String tag;
    private String content;

    // PostPage Getter
    public String getTitle() {return title;}
    public String getMedia() {return media;}
    public String getTag() {return tag;}
    public String getContent() {return content;}

    // PostPage Setter
    public void setTitle(String title) {this.title = title;}
    public void setMedia(String media) {this.media = media;}
    public void setTag(String tag) {this.tag = tag;}
    public void setContent(String content) {this.content = content;}
}
