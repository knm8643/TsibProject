package com.trys.tsibproject.mapper;

import com.trys.tsibproject.dto.*;
import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

import java.util.List;

public interface springTestMapper {
    public int insertTestMapper(String userName);
}
