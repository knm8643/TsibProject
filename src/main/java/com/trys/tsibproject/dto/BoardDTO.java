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
        // save
    private String title;
    private String media;
    private String tag;
    private String content;
        // saveTmp
    private String titleTmp;
    private String mediaTmp;
    private String tagTmp;
    private String contentTmp;

    // PostPage Getter
        // save
    public String getTitle() {return title;}
    public String getMedia() {return media;}
    public String getTag() {return tag;}
    public String getContent() {return content;}
        // saveTmp
    public String getTitleTmp() {return titleTmp;}
    public String getMediaTmp() {return mediaTmp;}
    public String getTagTmp() {return tagTmp;}
    public String getContentTmp() {return contentTmp;}

    // PostPage Setter
        // save
    public void setTitle(String title) {this.title = title;}
    public void setMedia(String media) {this.media = media;}
    public void setTag(String tag) {this.tag = tag;}
    public void setContent(String content) {this.content = content;}
        // saveTmp
    public void setTitleTmp(String titleTmp) {this.titleTmp = titleTmp;}
    public void setMediaTmp(String mediaTmp) {this.mediaTmp = mediaTmp;}
    public void setTagTmp(String tagTmp) {this.tagTmp = tagTmp;}
    public void setContentTmp(String contentTmp) {this.contentTmp = contentTmp;}
}
