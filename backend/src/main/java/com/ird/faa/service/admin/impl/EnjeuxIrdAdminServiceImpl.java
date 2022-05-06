package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.EnjeuxIrd;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.dao.EnjeuxIrdDao;
import com.ird.faa.service.admin.facade.EnjeuxIrdAdminService;
import com.ird.faa.service.admin.facade.ChercheurAdminService;

import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class EnjeuxIrdAdminServiceImpl extends AbstractServiceImpl<EnjeuxIrd> implements EnjeuxIrdAdminService {

@Autowired
private EnjeuxIrdDao enjeuxIrdDao;

@Autowired
private ArchivableService<EnjeuxIrd> archivableService;
        @Autowired
        private ChercheurAdminService chercheurService ;


@Autowired
private EntityManager entityManager;


@Override
public List<EnjeuxIrd> findAll(){
        String query = "SELECT o FROM EnjeuxIrd o where 1=1 ";
        query+= " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<EnjeuxIrd> findByChercheurNumeroMatricule(String numeroMatricule){
        return enjeuxIrdDao.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        @Transactional
        public int deleteByChercheurNumeroMatricule(String numeroMatricule){
        return enjeuxIrdDao.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        public List<EnjeuxIrd> findByChercheurId(Long id){
        return enjeuxIrdDao.findByChercheurId(id);
        }

        @Override
        @Transactional
        public int deleteByChercheurId(Long id){
        return enjeuxIrdDao.deleteByChercheurId(id);
        }

    @Override
    public EnjeuxIrd findByCode(String code){
    if( code==null) return null;
    return enjeuxIrdDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return enjeuxIrdDao.deleteByCode(code);
    }
    @Override
    public EnjeuxIrd findByIdOrCode(EnjeuxIrd enjeuxIrd){
        EnjeuxIrd resultat=null;
        if(enjeuxIrd != null){
            if(StringUtil.isNotEmpty(enjeuxIrd.getId())){
            resultat= enjeuxIrdDao.getOne(enjeuxIrd.getId());
            }else if(StringUtil.isNotEmpty(enjeuxIrd.getCode())) {
            resultat= enjeuxIrdDao.findByCode(enjeuxIrd.getCode());
            }
        }
    return resultat;
    }

@Override
public EnjeuxIrd findById(Long id){
if(id==null) return null;
return enjeuxIrdDao.getOne(id);
}

@Override
public EnjeuxIrd findByIdWithAssociatedList(Long id){
return findById(id);
}
     @Override
    public EnjeuxIrd archiver(EnjeuxIrd enjeuxIrd) {
        if (enjeuxIrd.getArchive() == null) {
        enjeuxIrd.setArchive(false);
        }
        enjeuxIrd.setArchive(true);
        enjeuxIrd.setDateArchivage(new Date());
        enjeuxIrdDao.save(enjeuxIrd);
        return enjeuxIrd;

    }

    @Override
    public EnjeuxIrd desarchiver(EnjeuxIrd enjeuxIrd) {
    if (enjeuxIrd.getArchive() == null) {
    enjeuxIrd.setArchive(false);
    }
    enjeuxIrd.setArchive(false);
    enjeuxIrd.setDateArchivage(null);
    enjeuxIrdDao.save(enjeuxIrd);
    return enjeuxIrd;
    }



@Transactional
public int deleteById(Long id){
int res=0;
if(enjeuxIrdDao.findById(id).isPresent())  {
enjeuxIrdDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public EnjeuxIrd update(EnjeuxIrd enjeuxIrd){
EnjeuxIrd foundedEnjeuxIrd = findById(enjeuxIrd.getId());
if(foundedEnjeuxIrd==null) return null;
else{
    archivableService.prepare(enjeuxIrd);
return  enjeuxIrdDao.save(enjeuxIrd);
}
}
private void prepareSave(EnjeuxIrd enjeuxIrd){
enjeuxIrd.setDateCreation(new Date());
if(enjeuxIrd.getArchive() == null)
  enjeuxIrd.setArchive(false);
if(enjeuxIrd.getAdmin() == null)
  enjeuxIrd.setAdmin(false);
if(enjeuxIrd.getVisible() == null)
  enjeuxIrd.setVisible(false);



}

@Override
public EnjeuxIrd save (EnjeuxIrd enjeuxIrd){
prepareSave(enjeuxIrd);

EnjeuxIrd result =null;
    EnjeuxIrd foundedEnjeuxIrd = findByCode(enjeuxIrd.getCode());
   if(foundedEnjeuxIrd == null){


    findChercheur(enjeuxIrd);

EnjeuxIrd savedEnjeuxIrd = enjeuxIrdDao.save(enjeuxIrd);

result = savedEnjeuxIrd;
   }

return result;
}

@Override
public List<EnjeuxIrd> save(List<EnjeuxIrd> enjeuxIrds){
List<EnjeuxIrd> list = new ArrayList<>();
for(EnjeuxIrd enjeuxIrd: enjeuxIrds){
list.add(save(enjeuxIrd));
}
return list;
}



@Override
@Transactional
public int delete(EnjeuxIrd enjeuxIrd){
    if(enjeuxIrd.getCode()==null) return -1;

    EnjeuxIrd foundedEnjeuxIrd = findByCode(enjeuxIrd.getCode());
    if(foundedEnjeuxIrd==null) return -1;
enjeuxIrdDao.delete(foundedEnjeuxIrd);
return 1;
}


public List<EnjeuxIrd> findByCriteria(EnjeuxIrdVo enjeuxIrdVo){

String query = "SELECT o FROM EnjeuxIrd o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",enjeuxIrdVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",enjeuxIrdVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "code","LIKE",enjeuxIrdVo.getCode());
            query += SearchUtil.addConstraint( "o", "description","LIKE",enjeuxIrdVo.getDescription());
            query += SearchUtil.addConstraint( "o", "archive","=",enjeuxIrdVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",enjeuxIrdVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",enjeuxIrdVo.getDateCreation());
            query += SearchUtil.addConstraint( "o", "admin","=",enjeuxIrdVo.getAdmin());
            query += SearchUtil.addConstraint( "o", "visible","=",enjeuxIrdVo.getVisible());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",enjeuxIrdVo.getDateArchivageMin(),enjeuxIrdVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",enjeuxIrdVo.getDateCreationMin(),enjeuxIrdVo.getDateCreationMax());
    if(enjeuxIrdVo.getChercheurVo()!=null){
        query += SearchUtil.addConstraint( "o", "chercheur.id","=",enjeuxIrdVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint( "o", "chercheur.numeroMatricule","LIKE",enjeuxIrdVo.getChercheurVo().getNumeroMatricule());
    }

query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}

    private void findChercheur(EnjeuxIrd enjeuxIrd){
        Chercheur loadedChercheur =chercheurService.findByIdOrNumeroMatricule(enjeuxIrd.getChercheur());

    if(loadedChercheur==null ) {
        return;
    }
    enjeuxIrd.setChercheur(loadedChercheur);
    }

@Override
@Transactional
public void delete(List<EnjeuxIrd> enjeuxIrds){
        if(ListUtil.isNotEmpty(enjeuxIrds)){
        enjeuxIrds.forEach(e->enjeuxIrdDao.delete(e));
        }
}
@Override
public void update(List<EnjeuxIrd> enjeuxIrds){
if(ListUtil.isNotEmpty(enjeuxIrds)){
enjeuxIrds.forEach(e->enjeuxIrdDao.save(e));
}
}



}
