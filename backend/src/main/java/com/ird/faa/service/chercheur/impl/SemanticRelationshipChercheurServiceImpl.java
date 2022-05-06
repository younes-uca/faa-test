package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.SemanticRelationship;
import com.ird.faa.dao.SemanticRelationshipDao;
import com.ird.faa.service.chercheur.facade.SemanticRelationshipChercheurService;

import com.ird.faa.ws.rest.provided.vo.SemanticRelationshipVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class SemanticRelationshipChercheurServiceImpl extends AbstractServiceImpl<SemanticRelationship> implements SemanticRelationshipChercheurService {

@Autowired
private SemanticRelationshipDao semanticRelationshipDao;



@Autowired
private EntityManager entityManager;


@Override
public List<SemanticRelationship> findAll(){
        String query = "SELECT o FROM SemanticRelationship o where 1=1 ";
        query+= " ORDER BY o.niveauExactitude";
        return entityManager.createQuery(query).getResultList();
}
    @Override
    public SemanticRelationship findByCode(String code){
    if( code==null) return null;
    return semanticRelationshipDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return semanticRelationshipDao.deleteByCode(code);
    }
    @Override
    public SemanticRelationship findByIdOrCode(SemanticRelationship semanticRelationship){
        SemanticRelationship resultat=null;
        if(semanticRelationship != null){
            if(StringUtil.isNotEmpty(semanticRelationship.getId())){
            resultat= semanticRelationshipDao.getOne(semanticRelationship.getId());
            }else if(StringUtil.isNotEmpty(semanticRelationship.getCode())) {
            resultat= semanticRelationshipDao.findByCode(semanticRelationship.getCode());
            }
        }
    return resultat;
    }

@Override
public SemanticRelationship findById(Long id){
if(id==null) return null;
return semanticRelationshipDao.getOne(id);
}

@Override
public SemanticRelationship findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(semanticRelationshipDao.findById(id).isPresent())  {
semanticRelationshipDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public SemanticRelationship update(SemanticRelationship semanticRelationship){
SemanticRelationship foundedSemanticRelationship = findById(semanticRelationship.getId());
if(foundedSemanticRelationship==null) return null;
else{
return  semanticRelationshipDao.save(semanticRelationship);
}
}

@Override
public SemanticRelationship save (SemanticRelationship semanticRelationship){

SemanticRelationship result =null;
    SemanticRelationship foundedSemanticRelationship = findByCode(semanticRelationship.getCode());
   if(foundedSemanticRelationship == null){



SemanticRelationship savedSemanticRelationship = semanticRelationshipDao.save(semanticRelationship);

result = savedSemanticRelationship;
   }

return result;
}

@Override
public List<SemanticRelationship> save(List<SemanticRelationship> semanticRelationships){
List<SemanticRelationship> list = new ArrayList<>();
for(SemanticRelationship semanticRelationship: semanticRelationships){
list.add(save(semanticRelationship));
}
return list;
}



@Override
@Transactional
public int delete(SemanticRelationship semanticRelationship){
    if(semanticRelationship.getCode()==null) return -1;

    SemanticRelationship foundedSemanticRelationship = findByCode(semanticRelationship.getCode());
    if(foundedSemanticRelationship==null) return -1;
semanticRelationshipDao.delete(foundedSemanticRelationship);
return 1;
}


public List<SemanticRelationship> findByCriteria(SemanticRelationshipVo semanticRelationshipVo){

String query = "SELECT o FROM SemanticRelationship o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",semanticRelationshipVo.getId());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",semanticRelationshipVo.getLibelle());
            query += SearchUtil.addConstraint( "o", "code","LIKE",semanticRelationshipVo.getCode());
            query += SearchUtil.addConstraint( "o", "niveauExactitude","=",semanticRelationshipVo.getNiveauExactitude());
            query += SearchUtil.addConstraintMinMax("o","niveauExactitude",semanticRelationshipVo.getNiveauExactitudeMin(),semanticRelationshipVo.getNiveauExactitudeMax());
query+= " ORDER BY o.niveauExactitude";
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<SemanticRelationship> semanticRelationships){
        if(ListUtil.isNotEmpty(semanticRelationships)){
        semanticRelationships.forEach(e->semanticRelationshipDao.delete(e));
        }
}
@Override
public void update(List<SemanticRelationship> semanticRelationships){
if(ListUtil.isNotEmpty(semanticRelationships)){
semanticRelationships.forEach(e->semanticRelationshipDao.save(e));
}
}



}
