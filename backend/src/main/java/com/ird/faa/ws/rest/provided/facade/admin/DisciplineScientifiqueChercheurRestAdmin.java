package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.DisciplineScientifiqueChercheurAdminService;

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
import com.ird.faa.bean.DisciplineScientifiqueChercheur;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueChercheurConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueChercheurVo;

@Api("Manages disciplineScientifiqueChercheur services")
@RestController
@RequestMapping("api/admin/disciplineScientifiqueChercheur")
public class DisciplineScientifiqueChercheurRestAdmin {

@Autowired
private DisciplineScientifiqueChercheurAdminService disciplineScientifiqueChercheurService;

@Autowired
private DisciplineScientifiqueChercheurConverter disciplineScientifiqueChercheurConverter;


            @ApiOperation("Updates the specified  disciplineScientifiqueChercheur")
            @PutMapping("/")
            public  DisciplineScientifiqueChercheurVo update(@RequestBody  DisciplineScientifiqueChercheurVo  disciplineScientifiqueChercheurVo){
            DisciplineScientifiqueChercheur disciplineScientifiqueChercheur = disciplineScientifiqueChercheurConverter.toItem(disciplineScientifiqueChercheurVo);
            disciplineScientifiqueChercheur = disciplineScientifiqueChercheurService.update(disciplineScientifiqueChercheur);
            return disciplineScientifiqueChercheurConverter.toVo(disciplineScientifiqueChercheur);
            }

    @ApiOperation("Finds a list of all disciplineScientifiqueChercheurs")
    @GetMapping("/")
    public List<DisciplineScientifiqueChercheurVo> findAll(){
        return disciplineScientifiqueChercheurConverter.toVo(disciplineScientifiqueChercheurService.findAll());
    }

    @ApiOperation("Finds a disciplineScientifiqueChercheur with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DisciplineScientifiqueChercheurVo findByIdWithAssociatedList(@PathVariable Long id){
    return disciplineScientifiqueChercheurConverter.toVo(disciplineScientifiqueChercheurService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search disciplineScientifiqueChercheur by a specific criteria")
    @PostMapping("/search")
    public List<DisciplineScientifiqueChercheurVo> findByCriteria(@RequestBody DisciplineScientifiqueChercheurVo disciplineScientifiqueChercheurVo){
        return disciplineScientifiqueChercheurConverter.toVo(disciplineScientifiqueChercheurService.findByCriteria(disciplineScientifiqueChercheurVo));
        }

            @ApiOperation("Finds a disciplineScientifiqueChercheur by id")
            @GetMapping("/id/{id}")
            public DisciplineScientifiqueChercheurVo findById(@PathVariable Long id){
            return disciplineScientifiqueChercheurConverter.toVo(disciplineScientifiqueChercheurService.findById(id));
            }

            @ApiOperation("Saves the specified  disciplineScientifiqueChercheur")
            @PostMapping("/")
            public DisciplineScientifiqueChercheurVo save(@RequestBody DisciplineScientifiqueChercheurVo disciplineScientifiqueChercheurVo){
            DisciplineScientifiqueChercheur disciplineScientifiqueChercheur = disciplineScientifiqueChercheurConverter.toItem(disciplineScientifiqueChercheurVo);
            disciplineScientifiqueChercheur = disciplineScientifiqueChercheurService.save(disciplineScientifiqueChercheur);
            return disciplineScientifiqueChercheurConverter.toVo(disciplineScientifiqueChercheur);
            }

            @ApiOperation("Delete the specified disciplineScientifiqueChercheur")
            @DeleteMapping("/")
            public int delete(@RequestBody DisciplineScientifiqueChercheurVo disciplineScientifiqueChercheurVo){
            DisciplineScientifiqueChercheur disciplineScientifiqueChercheur = disciplineScientifiqueChercheurConverter.toItem(disciplineScientifiqueChercheurVo);
            return disciplineScientifiqueChercheurService.delete(disciplineScientifiqueChercheur);
            }

            @ApiOperation("Deletes a disciplineScientifiqueChercheur by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return disciplineScientifiqueChercheurService.deleteById(id);
            }
        @ApiOperation("find by disciplineScientifique code")
        @GetMapping("/disciplineScientifique/code/{code}")
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueCode(@PathVariable String code){
        return disciplineScientifiqueChercheurService.findByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("delete by disciplineScientifique code")
        @DeleteMapping("/disciplineScientifique/code/{code}")
        public int deleteByDisciplineScientifiqueCode(@PathVariable String code){
        return disciplineScientifiqueChercheurService.deleteByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("find by disciplineScientifique id")
        @GetMapping("/disciplineScientifique/id/{id}")
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueId(@PathVariable Long id){
        return disciplineScientifiqueChercheurService.findByDisciplineScientifiqueId(id);
        }

        @ApiOperation("delete by disciplineScientifique id")
        @DeleteMapping("/disciplineScientifique/id/{id}")
        public int deleteByDisciplineScientifiqueId(@PathVariable Long id){
        return disciplineScientifiqueChercheurService.deleteByDisciplineScientifiqueId(id);
        }

        @ApiOperation("find by disciplineScientifiqueErc code")
        @GetMapping("/disciplineScientifiqueErc/code/{code}")
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueErcCode(@PathVariable String code){
        return disciplineScientifiqueChercheurService.findByDisciplineScientifiqueErcCode(code);
        }

        @ApiOperation("delete by disciplineScientifiqueErc code")
        @DeleteMapping("/disciplineScientifiqueErc/code/{code}")
        public int deleteByDisciplineScientifiqueErcCode(@PathVariable String code){
        return disciplineScientifiqueChercheurService.deleteByDisciplineScientifiqueErcCode(code);
        }

        @ApiOperation("find by disciplineScientifiqueErc id")
        @GetMapping("/disciplineScientifiqueErc/id/{id}")
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueErcId(@PathVariable Long id){
        return disciplineScientifiqueChercheurService.findByDisciplineScientifiqueErcId(id);
        }

        @ApiOperation("delete by disciplineScientifiqueErc id")
        @DeleteMapping("/disciplineScientifiqueErc/id/{id}")
        public int deleteByDisciplineScientifiqueErcId(@PathVariable Long id){
        return disciplineScientifiqueChercheurService.deleteByDisciplineScientifiqueErcId(id);
        }

        @ApiOperation("find by chercheur numeroMatricule")
        @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public List<DisciplineScientifiqueChercheur> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueChercheurService.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("delete by chercheur numeroMatricule")
        @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueChercheurService.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("find by chercheur id")
        @GetMapping("/chercheur/id/{id}")
        public List<DisciplineScientifiqueChercheur> findByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueChercheurService.findByChercheurId(id);
        }

        @ApiOperation("delete by chercheur id")
        @DeleteMapping("/chercheur/id/{id}")
        public int deleteByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueChercheurService.deleteByChercheurId(id);
        }



            }
