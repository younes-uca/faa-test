package com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.bean.Distinction;
import com.ird.faa.service.admin.facade.DistinctionAdminService;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueConverter;
import com.ird.faa.ws.rest.provided.converter.DistinctionConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueVo;
import com.ird.faa.ws.rest.provided.vo.DistinctionVo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages distinction services")
@RestController
@RequestMapping("api/admin/distinction")
public class DistinctionRestAdmin {

    @Autowired
    private DistinctionAdminService distinctionService;

    @Autowired
    private DistinctionConverter distinctionConverter;
    @Autowired
    private DisciplineScientifiqueConverter disciplineScientifiqueConverter;


    @ApiOperation("Updates the specified  distinction")
    @PutMapping("/")
    public DistinctionVo update(@RequestBody DistinctionVo distinctionVo) {
        Distinction distinction = distinctionConverter.toItem(distinctionVo);
        distinction = distinctionService.update(distinction);
        return distinctionConverter.toVo(distinction);
    }

    @ApiOperation("Finds a list of all distinctions")
    @GetMapping("/")
    public List<DistinctionVo> findAll() {
        return distinctionConverter.toVo(distinctionService.findAll());
    }

    @ApiOperation("Finds a distinction with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DistinctionVo findByIdWithAssociatedList(@PathVariable Long id) {
        return distinctionConverter.toVo(distinctionService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search distinction by a specific criteria")
    @PostMapping("/search")
    public List<DistinctionVo> findByCriteria(@RequestBody DistinctionVo distinctionVo) {
        return distinctionConverter.toVo(distinctionService.findByCriteria(distinctionVo));
    }

    @ApiOperation("Finds a distinction by id")
    @GetMapping("/id/{id}")
    public DistinctionVo findById(@PathVariable Long id) {
        return distinctionConverter.toVo(distinctionService.findById(id));
    }

    @ApiOperation("Saves the specified  distinction")
    @PostMapping("/")
    public DistinctionVo save(@RequestBody DistinctionVo distinctionVo) {
        Distinction distinction = distinctionConverter.toItem(distinctionVo);
        distinction = distinctionService.save(distinction);
        return distinctionConverter.toVo(distinction);
    }

    @ApiOperation("Delete the specified distinction")
    @DeleteMapping("/")
    public int delete(@RequestBody DistinctionVo distinctionVo) {
        Distinction distinction = distinctionConverter.toItem(distinctionVo);
        return distinctionService.delete(distinction);
    }

    @ApiOperation("Deletes a distinction by id")
    @DeleteMapping("/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return distinctionService.deleteById(id);
    }

    @ApiOperation("find by chercheur numeroMatricule")
    @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
    public List<Distinction> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule) {
        return distinctionService.findByChercheurNumeroMatricule(numeroMatricule);
    }

    @ApiOperation("delete by chercheur numeroMatricule")
    @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
    public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule) {
        return distinctionService.deleteByChercheurNumeroMatricule(numeroMatricule);
    }

    @ApiOperation("find by chercheur id")
    @GetMapping("/chercheur/id/{id}")
    public List<Distinction> findByChercheurId(@PathVariable Long id) {
        return distinctionService.findByChercheurId(id);
    }

    @ApiOperation("delete by chercheur id")
    @DeleteMapping("/chercheur/id/{id}")
    public int deleteByChercheurId(@PathVariable Long id) {
        return distinctionService.deleteByChercheurId(id);
    }

    @ApiOperation("find by campagne code")
    @GetMapping("/campagne/code/{code}")
    public List<Distinction> findByCampagneCode(@PathVariable String code) {
        return distinctionService.findByCampagneCode(code);
    }

    @ApiOperation("delete by campagne code")
    @DeleteMapping("/campagne/code/{code}")
    public int deleteByCampagneCode(@PathVariable String code) {
        return distinctionService.deleteByCampagneCode(code);
    }

    @ApiOperation("find by campagne id")
    @GetMapping("/campagne/id/{id}")
    public List<Distinction> findByCampagneId(@PathVariable Long id) {
        return distinctionService.findByCampagneId(id);
    }

    @ApiOperation("delete by campagne id")
    @DeleteMapping("/campagne/id/{id}")
    public int deleteByCampagneId(@PathVariable Long id) {
        return distinctionService.deleteByCampagneId(id);
    }

    @ApiOperation("find by etatEtapeCampagne code")
    @GetMapping("/etatEtapeCampagne/code/{code}")
    public List<Distinction> findByEtatEtapeCampagneCode(@PathVariable String code) {
        return distinctionService.findByEtatEtapeCampagneCode(code);
    }

    @ApiOperation("delete by etatEtapeCampagne code")
    @DeleteMapping("/etatEtapeCampagne/code/{code}")
    public int deleteByEtatEtapeCampagneCode(@PathVariable String code) {
        return distinctionService.deleteByEtatEtapeCampagneCode(code);
    }

    @ApiOperation("find by etatEtapeCampagne id")
    @GetMapping("/etatEtapeCampagne/id/{id}")
    public List<Distinction> findByEtatEtapeCampagneId(@PathVariable Long id) {
        return distinctionService.findByEtatEtapeCampagneId(id);
    }

    @ApiOperation("delete by etatEtapeCampagne id")
    @DeleteMapping("/etatEtapeCampagne/id/{id}")
    public int deleteByEtatEtapeCampagneId(@PathVariable Long id) {
        return distinctionService.deleteByEtatEtapeCampagneId(id);
    }

    @ApiOperation("test test")
    @GetMapping("/findDisciplineScientifiqueWithChercheurDis")
    public List<DisciplineScientifiqueVo> findDisciplineScientifiqueWithChercheurDis() {
        return disciplineScientifiqueConverter.toVo(distinctionService.findDisciplineScientifiqueWithChercheurDis());
    }


}
