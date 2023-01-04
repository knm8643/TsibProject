package com.trys.tsibproject.dto;

public class BoardDTO {
    private String userNo;
    private String userName;
    private String userEmail;
    private String userNickName;

    // 오른쪽 클릭 command + n 개터새터 자동 생성 단축키
    public String getUserNo() {
        return userNo;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getUserNickName() {
        return userNickName;
    }

    public void setUserNo(String userNo) {
        this.userNo = userNo;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setUserNickName(String userNickName) {
        this.userNickName = userNickName;
    }
}
