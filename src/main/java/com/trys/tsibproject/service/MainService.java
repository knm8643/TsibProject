package com.trys.tsibproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.trys.tsibproject.dao.MainDAO;
import com.trys.tsibproject.dto.BoardDTO;

@Service
public class MainService {
    @Autowired
    private MainDAO mainDAO;

    public List<BoardDTO> loadEntirePosts(){
        return mainDAO.loadEntirePosts();
    }
}
