package com.trys.tsibproject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.trys.tsibproject.dto.BoardDTO;

@Mapper
public interface mainMapper {
    public List<BoardDTO> loadEntirePosts();
}
