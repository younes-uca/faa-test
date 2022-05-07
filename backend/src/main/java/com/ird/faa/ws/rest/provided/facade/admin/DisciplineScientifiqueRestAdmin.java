package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.DisciplineScientifiqueAdminService;

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
import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueVo;

@Api("Manages disciplineScientifique services")
@RestController
@RequestMapping("api/admin/disciplineScientifique")
public class DisciplineScientifiqueRestAdmin {

@Autowired
private DisciplineScientifiqueAdminService disciplineScientifiqueService;

@Autowired
private DisciplineScientifiqueConverter disciplineScientifiqueConverter;


            @ApiOperation("Updates the specified  disciplineScientifique")
            @PutMapping("/")
            public  DisciplineScientifiqueVo update(@RequestBody  DisciplineScientifiqueVo  disciplineScientifiqueVo){
            DisciplineScientifique disciplineScientifique = disciplineScientifiqueConverter.toItem(disciplineScientifiqueVo);
            disciplineScientifique = disciplineScientifiqueService.update(disciplineScientifique);
            return disciplineScientifiqueConverter.toVo(disciplineScientifique);
            }

    @ApiOperation("Finds a list of all disciplineScientifiques")
    @GetMapping("/")
    public List<DisciplineScientifiqueVo> findAll(){
        return disciplineScientifiqueConverter.toVo(disciplineScientifiqueService.findAll());
    }

    @ApiOperation("Finds a disciplineScientifique with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DisciplineScientifiqueVo findByIdWithAssociatedList(@PathVariable Long id){
    return disciplineScientifiqueConverter.toVo(disciplineScientifiqueService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search disciplineScientifique by a specific criteria")
    @PostMapping("/search")
    public List<DisciplineScientifiqueVo> findByCriteria(@RequestBody DisciplineScientifiqueVo disciplineScientifiqueVo){
        return disciplineScientifiqueConverter.toVo(disciplineScientifiqueService.findByCriteria(disciplineScientifiqueVo));
        }

            @ApiOperation("Finds a disciplineScientifique by id")
            @GetMapping("/id/{id}")
            public DisciplineScientifiqueVo findById(@PathVariable Long id){
            return disciplineScientifiqueConverter.toVo(disciplineScientifiqueService.findById(id));
            }

            @ApiOperation("Saves the specified  disciplineScientifique")
            @PostMapping("/")
            public DisciplineScientifiqueVo save(@RequestBody DisciplineScientifiqueVo disciplineScientifiqueVo){
            DisciplineScientifique disciplineScientifique = disciplineScientifiqueConverter.toItem(disciplineScientifiqueVo);
            disciplineScientifique = disciplineScientifiqueService.save(disciplineScientifique);
            return disciplineScientifiqueConverter.toVo(disciplineScientifique);
            }

            @ApiOperation("Delete the specified disciplineScientifique")
            @DeleteMapping("/")
            public int delete(@RequestBody DisciplineScientifiqueVo disciplineScientifiqueVo){
            DisciplineScientifique disciplineScientifique = disciplineScientifiqueConverter.toItem(disciplineScientifiqueVo);
            return disciplineScientifiqueService.delete(disciplineScientifique);
            }

            @ApiOperation("Deletes a disciplineScientifique by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return disciplineScientifiqueService.deleteById(id);
            }
        @ApiOperation("find by disciplineScientifiqueParent code")
        @GetMapping("/disciplineScientifiqueParent/code/{code}")
        public List<DisciplineScientifique> findByDisciplineScientifiqueParentCode(@PathVariable String code){
        return disciplineScientifiqueService.findByDisciplineScientifiqueParentCode(code);
        }

        @ApiOperation("delete by disciplineScientifiqueParent code")
        @DeleteMapping("/disciplineScientifiqueParent/code/{code}")
        public int deleteByDisciplineScientifiqueParentCode(@PathVariable String code){
        return disciplineScientifiqueService.deleteByDisciplineScientifiqueParentCode(code);
        }

        @ApiOperation("find by disciplineScientifiqueParent id")
        @GetMapping("/disciplineScientifiqueParent/id/{id}")
        public List<DisciplineScientifique> findByDisciplineScientifiqueParentId(@PathVariable Long id){
        return disciplineScientifiqueService.findByDisciplineScientifiqueParentId(id);
        }

        @ApiOperation("delete by disciplineScientifiqueParent id")
        @DeleteMapping("/disciplineScientifiqueParent/id/{id}")
        public int deleteByDisciplineScientifiqueParentId(@PathVariable Long id){
        return disciplineScientifiqueService.deleteByDisciplineScientifiqueParentId(id);
        }

        @ApiOperation("find by chercheur numeroMatricule")
        @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public List<DisciplineScientifique> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueService.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("delete by chercheur numeroMatricule")
        @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueService.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("find by chercheur id")
        @GetMapping("/chercheur/id/{id}")
        public List<DisciplineScientifique> findByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueService.findByChercheurId(id);
        }

        @ApiOperation("delete by chercheur id")
        @DeleteMapping("/chercheur/id/{id}")
        public int deleteByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueService.deleteByChercheurId(id);
        }



            @PutMapping("/archiver/")
            public DisciplineScientifiqueVo archiver(@RequestBody DisciplineScientifiqueVo disciplineScientifiqueVo){
                DisciplineScientifique disciplineScientifique = disciplineScientifiqueService.archiver(disciplineScientifiqueConverter.toItem(disciplineScientifiqueVo));
                return disciplineScientifiqueConverter.toVo(disciplineScientifique);
                }

            @PutMapping("/desarchiver/")
            public DisciplineScientifiqueVo desarchiver(@RequestBody DisciplineScientifiqueVo disciplineScientifiqueVo){
                DisciplineScientifique disciplineScientifique = disciplineScientifiqueService.desarchiver(disciplineScientifiqueConverter.toItem(disciplineScientifiqueVo));
                return disciplineScientifiqueConverter.toVo(disciplineScientifique);}
    @PostMapping("findByDifferentIds")
    public List<DisciplineScientifiqueVo> findByDifferentIds(@RequestBody List<Long> ids) {
        return disciplineScientifiqueConverter.toVo(disciplineScientifiqueService.findByDifferentIds(ids));
    }
}


