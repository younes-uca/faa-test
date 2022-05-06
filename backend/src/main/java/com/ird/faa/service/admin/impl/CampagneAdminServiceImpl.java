package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Campagne;
import com.ird.faa.dao.CampagneDao;
import com.ird.faa.service.admin.facade.CampagneAdminService;

import com.ird.faa.ws.rest.provided.vo.CampagneVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class CampagneAdminServiceImpl extends AbstractServiceImpl<Campagne> implements CampagneAdminService {

@Autowired
private CampagneDao campagneDao;



@Autowired
private EntityManager entityManager;


@Override
public List<Campagne> findAll(){
        String query = "SELECT o FROM Campagne o where 1=1 ";
        query+= " ORDER BY o.dateDepart";
        return entityManager.createQuery(query).getResultList();
}
    @Override
    public Campagne findByCode(String code){
    if( code==null) return null;
    return campagneDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return campagneDao.deleteByCode(code);
    }
    @Override
    public Campagne findByIdOrCode(Campagne campagne){
        Campagne resultat=null;
        if(campagne != null){
            if(StringUtil.isNotEmpty(campagne.getId())){
            resultat= campagneDao.getOne(campagne.getId());
            }else if(StringUtil.isNotEmpty(campagne.getCode())) {
            resultat= campagneDao.findByCode(campagne.getCode());
            }
        }
    return resultat;
    }

@Override
public Campagne findById(Long id){
if(id==null) return null;
return campagneDao.getOne(id);
}

@Override
public Campagne findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(campagneDao.findById(id).isPresent())  {
campagneDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Campagne update(Campagne campagne){
Campagne foundedCampagne = findById(campagne.getId());
if(foundedCampagne==null) return null;
else{
return  campagneDao.save(campagne);
}
}

@Override
public Campagne save (Campagne campagne){

Campagne result =null;
    Campagne foundedCampagne = findByCode(campagne.getCode());
   if(foundedCampagne == null){



Campagne savedCampagne = campagneDao.save(campagne);

result = savedCampagne;
   }

return result;
}

@Override
public List<Campagne> save(List<Campagne> campagnes){
List<Campagne> list = new ArrayList<>();
for(Campagne campagne: campagnes){
list.add(save(campagne));
}
return list;
}



@Override
@Transactional
public int delete(Campagne campagne){
    if(campagne.getCode()==null) return -1;

    Campagne foundedCampagne = findByCode(campagne.getCode());
    if(foundedCampagne==null) return -1;
campagneDao.delete(foundedCampagne);
return 1;
}


public List<Campagne> findByCriteria(CampagneVo campagneVo){

String query = "SELECT o FROM Campagne o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",campagneVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",campagneVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "code","LIKE",campagneVo.getCode());
            query += SearchUtil.addConstraint( "o", "annee","=",campagneVo.getAnnee());
        query += SearchUtil.addConstraintDate( "o", "dateDepart","=",campagneVo.getDateDepart());
        query += SearchUtil.addConstraintDate( "o", "dateFin","=",campagneVo.getDateFin());
            query += SearchUtil.addConstraintMinMax("o","annee",campagneVo.getAnneeMin(),campagneVo.getAnneeMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateDepart",campagneVo.getDateDepartMin(),campagneVo.getDateDepartMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateFin",campagneVo.getDateFinMin(),campagneVo.getDateFinMax());
query+= " ORDER BY o.dateDepart";
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Campagne> campagnes){
        if(ListUtil.isNotEmpty(campagnes)){
        campagnes.forEach(e->campagneDao.delete(e));
        }
}
@Override
public void update(List<Campagne> campagnes){
if(ListUtil.isNotEmpty(campagnes)){
campagnes.forEach(e->campagneDao.save(e));
}
}



}
