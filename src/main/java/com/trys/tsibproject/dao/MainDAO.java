package com.trys.tsibproject.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.trys.tsibproject.mapper.mainMapper;
import com.trys.tsibproject.dto.BoardDTO;

@Repository
public class MainDAO {
    @Autowired
    private mainMapper mainMapper;

    public List<BoardDTO> loadEntirePosts(){
        return mainMapper.loadEntirePosts();
    }
}
