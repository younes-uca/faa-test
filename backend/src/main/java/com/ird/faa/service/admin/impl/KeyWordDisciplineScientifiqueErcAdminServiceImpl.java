package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.KeyWordDisciplineScientifiqueErc;
import com.ird.faa.bean.KeyWord;
import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.dao.KeyWordDisciplineScientifiqueErcDao;
import com.ird.faa.service.admin.facade.KeyWordDisciplineScientifiqueErcAdminService;
import com.ird.faa.service.admin.facade.KeyWordAdminService;
import com.ird.faa.service.admin.facade.DisciplineScientifiqueAdminService;

import com.ird.faa.ws.rest.provided.vo.KeyWordDisciplineScientifiqueErcVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class KeyWordDisciplineScientifiqueErcAdminServiceImpl extends AbstractServiceImpl<KeyWordDisciplineScientifiqueErc> implements KeyWordDisciplineScientifiqueErcAdminService {

@Autowired
private KeyWordDisciplineScientifiqueErcDao keyWordDisciplineScientifiqueErcDao;

        @Autowired
        private KeyWordAdminService keyWordService ;
        @Autowired
        private DisciplineScientifiqueAdminService disciplineScientifiqueService ;


@Autowired
private EntityManager entityManager;


@Override
public List<KeyWordDisciplineScientifiqueErc> findAll(){
        return keyWordDisciplineScientifiqueErcDao.findAll();
}

        @Override
        public List<KeyWordDisciplineScientifiqueErc> findByKeyWordCode(String code){
        return keyWordDisciplineScientifiqueErcDao.findByKeyWordCode(code);
        }

        @Override
        @Transactional
        public int deleteByKeyWordCode(String code){
        return keyWordDisciplineScientifiqueErcDao.deleteByKeyWordCode(code);
        }

        @Override
        public List<KeyWordDisciplineScientifiqueErc> findByKeyWordId(Long id){
        return keyWordDisciplineScientifiqueErcDao.findByKeyWordId(id);
        }

        @Override
        @Transactional
        public int deleteByKeyWordId(Long id){
        return keyWordDisciplineScientifiqueErcDao.deleteByKeyWordId(id);
        }


        @Override
        public List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueCode(String code){
        return keyWordDisciplineScientifiqueErcDao.findByDisciplineScientifiqueCode(code);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueCode(String code){
        return keyWordDisciplineScientifiqueErcDao.deleteByDisciplineScientifiqueCode(code);
        }

        @Override
        public List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueId(Long id){
        return keyWordDisciplineScientifiqueErcDao.findByDisciplineScientifiqueId(id);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueId(Long id){
        return keyWordDisciplineScientifiqueErcDao.deleteByDisciplineScientifiqueId(id);
        }


@Override
public KeyWordDisciplineScientifiqueErc findById(Long id){
if(id==null) return null;
return keyWordDisciplineScientifiqueErcDao.getOne(id);
}

@Override
public KeyWordDisciplineScientifiqueErc findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(keyWordDisciplineScientifiqueErcDao.findById(id).isPresent())  {
keyWordDisciplineScientifiqueErcDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public KeyWordDisciplineScientifiqueErc update(KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc){
KeyWordDisciplineScientifiqueErc foundedKeyWordDisciplineScientifiqueErc = findById(keyWordDisciplineScientifiqueErc.getId());
if(foundedKeyWordDisciplineScientifiqueErc==null) return null;
else{
return  keyWordDisciplineScientifiqueErcDao.save(keyWordDisciplineScientifiqueErc);
}
}

@Override
public KeyWordDisciplineScientifiqueErc save (KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc){



    findKeyWord(keyWordDisciplineScientifiqueErc);
    findDisciplineScientifique(keyWordDisciplineScientifiqueErc);

return keyWordDisciplineScientifiqueErcDao.save(keyWordDisciplineScientifiqueErc);


}

@Override
public List<KeyWordDisciplineScientifiqueErc> save(List<KeyWordDisciplineScientifiqueErc> keyWordDisciplineScientifiqueErcs){
List<KeyWordDisciplineScientifiqueErc> list = new ArrayList<>();
for(KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc: keyWordDisciplineScientifiqueErcs){
list.add(save(keyWordDisciplineScientifiqueErc));
}
return list;
}



@Override
@Transactional
public int delete(KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc){
    if(keyWordDisciplineScientifiqueErc.getId()==null) return -1;
    KeyWordDisciplineScientifiqueErc foundedKeyWordDisciplineScientifiqueErc = findById(keyWordDisciplineScientifiqueErc.getId());
    if(foundedKeyWordDisciplineScientifiqueErc==null) return -1;
keyWordDisciplineScientifiqueErcDao.delete(foundedKeyWordDisciplineScientifiqueErc);
return 1;
}


public List<KeyWordDisciplineScientifiqueErc> findByCriteria(KeyWordDisciplineScientifiqueErcVo keyWordDisciplineScientifiqueErcVo){

String query = "SELECT o FROM KeyWordDisciplineScientifiqueErc o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",keyWordDisciplineScientifiqueErcVo.getId());
    if(keyWordDisciplineScientifiqueErcVo.getKeyWordVo()!=null){
        query += SearchUtil.addConstraint( "o", "keyWord.id","=",keyWordDisciplineScientifiqueErcVo.getKeyWordVo().getId());
            query += SearchUtil.addConstraint( "o", "keyWord.code","LIKE",keyWordDisciplineScientifiqueErcVo.getKeyWordVo().getCode());
    }

    if(keyWordDisciplineScientifiqueErcVo.getDisciplineScientifiqueVo()!=null){
        query += SearchUtil.addConstraint( "o", "disciplineScientifique.id","=",keyWordDisciplineScientifiqueErcVo.getDisciplineScientifiqueVo().getId());
            query += SearchUtil.addConstraint( "o", "disciplineScientifique.code","LIKE",keyWordDisciplineScientifiqueErcVo.getDisciplineScientifiqueVo().getCode());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findKeyWord(KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc){
        KeyWord loadedKeyWord =keyWordService.findByIdOrCode(keyWordDisciplineScientifiqueErc.getKeyWord());

    if(loadedKeyWord==null ) {
        return;
    }
    keyWordDisciplineScientifiqueErc.setKeyWord(loadedKeyWord);
    }
    private void findDisciplineScientifique(KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc){
        DisciplineScientifique loadedDisciplineScientifique =disciplineScientifiqueService.findByIdOrCode(keyWordDisciplineScientifiqueErc.getDisciplineScientifique());

    if(loadedDisciplineScientifique==null ) {
        return;
    }
    keyWordDisciplineScientifiqueErc.setDisciplineScientifique(loadedDisciplineScientifique);
    }

@Override
@Transactional
public void delete(List<KeyWordDisciplineScientifiqueErc> keyWordDisciplineScientifiqueErcs){
        if(ListUtil.isNotEmpty(keyWordDisciplineScientifiqueErcs)){
        keyWordDisciplineScientifiqueErcs.forEach(e->keyWordDisciplineScientifiqueErcDao.delete(e));
        }
}
@Override
public void update(List<KeyWordDisciplineScientifiqueErc> keyWordDisciplineScientifiqueErcs){
if(ListUtil.isNotEmpty(keyWordDisciplineScientifiqueErcs)){
keyWordDisciplineScientifiqueErcs.forEach(e->keyWordDisciplineScientifiqueErcDao.save(e));
}
}



}
