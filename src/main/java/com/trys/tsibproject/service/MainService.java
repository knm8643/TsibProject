package com.trys.tsibproject.service;

import com.trys.tsibproject.dao.MainDAO;
import com.trys.tsibproject.dto.MainDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainService {
    @Autowired
    private MainDAO mainDAO;

    public MainDTO loadPost() {
        return mainDAO.loadPost();
    }
}
