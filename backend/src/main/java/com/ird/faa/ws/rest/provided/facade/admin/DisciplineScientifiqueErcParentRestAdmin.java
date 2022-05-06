package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.DisciplineScientifiqueErcParentAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.DisciplineScientifiqueErcParent;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueErcParentConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcParentVo;

@Api("Manages disciplineScientifiqueErcParent services")
@RestController
@RequestMapping("api/admin/disciplineScientifiqueErcParent")
public class DisciplineScientifiqueErcParentRestAdmin {

@Autowired
private DisciplineScientifiqueErcParentAdminService disciplineScientifiqueErcParentService;

@Autowired
private DisciplineScientifiqueErcParentConverter disciplineScientifiqueErcParentConverter;


            @ApiOperation("Updates the specified  disciplineScientifiqueErcParent")
            @PutMapping("/")
            public  DisciplineScientifiqueErcParentVo update(@RequestBody  DisciplineScientifiqueErcParentVo  disciplineScientifiqueErcParentVo){
            DisciplineScientifiqueErcParent disciplineScientifiqueErcParent = disciplineScientifiqueErcParentConverter.toItem(disciplineScientifiqueErcParentVo);
            disciplineScientifiqueErcParent = disciplineScientifiqueErcParentService.update(disciplineScientifiqueErcParent);
            return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParent);
            }

    @ApiOperation("Finds a list of all disciplineScientifiqueErcParents")
    @GetMapping("/")
    public List<DisciplineScientifiqueErcParentVo> findAll(){
        return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParentService.findAll());
    }

    @ApiOperation("Finds a disciplineScientifiqueErcParent with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DisciplineScientifiqueErcParentVo findByIdWithAssociatedList(@PathVariable Long id){
    return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParentService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search disciplineScientifiqueErcParent by a specific criteria")
    @PostMapping("/search")
    public List<DisciplineScientifiqueErcParentVo> findByCriteria(@RequestBody DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){
        return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParentService.findByCriteria(disciplineScientifiqueErcParentVo));
        }

            @ApiOperation("Finds a disciplineScientifiqueErcParent by id")
            @GetMapping("/id/{id}")
            public DisciplineScientifiqueErcParentVo findById(@PathVariable Long id){
            return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParentService.findById(id));
            }

            @ApiOperation("Saves the specified  disciplineScientifiqueErcParent")
            @PostMapping("/")
            public DisciplineScientifiqueErcParentVo save(@RequestBody DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){
            DisciplineScientifiqueErcParent disciplineScientifiqueErcParent = disciplineScientifiqueErcParentConverter.toItem(disciplineScientifiqueErcParentVo);
            disciplineScientifiqueErcParent = disciplineScientifiqueErcParentService.save(disciplineScientifiqueErcParent);
            return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParent);
            }

            @ApiOperation("Delete the specified disciplineScientifiqueErcParent")
            @DeleteMapping("/")
            public int delete(@RequestBody DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){
            DisciplineScientifiqueErcParent disciplineScientifiqueErcParent = disciplineScientifiqueErcParentConverter.toItem(disciplineScientifiqueErcParentVo);
            return disciplineScientifiqueErcParentService.delete(disciplineScientifiqueErcParent);
            }

            @ApiOperation("Deletes a disciplineScientifiqueErcParent by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return disciplineScientifiqueErcParentService.deleteById(id);
            }
        @ApiOperation("find by chercheur numeroMatricule")
        @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public List<DisciplineScientifiqueErcParent> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueErcParentService.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("delete by chercheur numeroMatricule")
        @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueErcParentService.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("find by chercheur id")
        @GetMapping("/chercheur/id/{id}")
        public List<DisciplineScientifiqueErcParent> findByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueErcParentService.findByChercheurId(id);
        }

        @ApiOperation("delete by chercheur id")
        @DeleteMapping("/chercheur/id/{id}")
        public int deleteByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueErcParentService.deleteByChercheurId(id);
        }



            @PutMapping("/archiver/")
            public DisciplineScientifiqueErcParentVo archiver(@RequestBody DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){
                DisciplineScientifiqueErcParent disciplineScientifiqueErcParent = disciplineScientifiqueErcParentService.archiver(disciplineScientifiqueErcParentConverter.toItem(disciplineScientifiqueErcParentVo));
                return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParent);
                }

            @PutMapping("/desarchiver/")
            public DisciplineScientifiqueErcParentVo desarchiver(@RequestBody DisciplineScientifiqueErcParentVo disciplineScientifiqueErcParentVo){
                DisciplineScientifiqueErcParent disciplineScientifiqueErcParent = disciplineScientifiqueErcParentService.desarchiver(disciplineScientifiqueErcParentConverter.toItem(disciplineScientifiqueErcParentVo));
                return disciplineScientifiqueErcParentConverter.toVo(disciplineScientifiqueErcParent);}
            }
