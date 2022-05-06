package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcChercheurService;

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
import com.ird.faa.bean.DisciplineScientifiqueErc;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueErcConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcVo;

@Api("Manages disciplineScientifiqueErc services")
@RestController
@RequestMapping("api/chercheur/disciplineScientifiqueErc")
public class DisciplineScientifiqueErcRestChercheur {

@Autowired
private DisciplineScientifiqueErcChercheurService disciplineScientifiqueErcService;

@Autowired
private DisciplineScientifiqueErcConverter disciplineScientifiqueErcConverter;


            @ApiOperation("Updates the specified  disciplineScientifiqueErc")
            @PutMapping("/")
            public  DisciplineScientifiqueErcVo update(@RequestBody  DisciplineScientifiqueErcVo  disciplineScientifiqueErcVo){
            DisciplineScientifiqueErc disciplineScientifiqueErc = disciplineScientifiqueErcConverter.toItem(disciplineScientifiqueErcVo);
            disciplineScientifiqueErc = disciplineScientifiqueErcService.update(disciplineScientifiqueErc);
            return disciplineScientifiqueErcConverter.toVo(disciplineScientifiqueErc);
            }

    @ApiOperation("Finds a list of all disciplineScientifiqueErcs")
    @GetMapping("/")
    public List<DisciplineScientifiqueErcVo> findAll(){
        return disciplineScientifiqueErcConverter.toVo(disciplineScientifiqueErcService.findAll());
    }

    @ApiOperation("Finds a disciplineScientifiqueErc with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DisciplineScientifiqueErcVo findByIdWithAssociatedList(@PathVariable Long id){
    return disciplineScientifiqueErcConverter.toVo(disciplineScientifiqueErcService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search disciplineScientifiqueErc by a specific criteria")
    @PostMapping("/search")
    public List<DisciplineScientifiqueErcVo> findByCriteria(@RequestBody DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){
        return disciplineScientifiqueErcConverter.toVo(disciplineScientifiqueErcService.findByCriteria(disciplineScientifiqueErcVo));
        }

            @ApiOperation("Finds a disciplineScientifiqueErc by id")
            @GetMapping("/id/{id}")
            public DisciplineScientifiqueErcVo findById(@PathVariable Long id){
            return disciplineScientifiqueErcConverter.toVo(disciplineScientifiqueErcService.findById(id));
            }

            @ApiOperation("Saves the specified  disciplineScientifiqueErc")
            @PostMapping("/")
            public DisciplineScientifiqueErcVo save(@RequestBody DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){
            DisciplineScientifiqueErc disciplineScientifiqueErc = disciplineScientifiqueErcConverter.toItem(disciplineScientifiqueErcVo);
            disciplineScientifiqueErc = disciplineScientifiqueErcService.save(disciplineScientifiqueErc);
            return disciplineScientifiqueErcConverter.toVo(disciplineScientifiqueErc);
            }

            @ApiOperation("Delete the specified disciplineScientifiqueErc")
            @DeleteMapping("/")
            public int delete(@RequestBody DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){
            DisciplineScientifiqueErc disciplineScientifiqueErc = disciplineScientifiqueErcConverter.toItem(disciplineScientifiqueErcVo);
            return disciplineScientifiqueErcService.delete(disciplineScientifiqueErc);
            }

            @ApiOperation("Deletes a disciplineScientifiqueErc by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return disciplineScientifiqueErcService.deleteById(id);
            }
        @ApiOperation("find by disciplineScientifiqueErcParent code")
        @GetMapping("/disciplineScientifiqueErcParent/code/{code}")
        public List<DisciplineScientifiqueErc> findByDisciplineScientifiqueErcParentCode(@PathVariable String code){
        return disciplineScientifiqueErcService.findByDisciplineScientifiqueErcParentCode(code);
        }

        @ApiOperation("delete by disciplineScientifiqueErcParent code")
        @DeleteMapping("/disciplineScientifiqueErcParent/code/{code}")
        public int deleteByDisciplineScientifiqueErcParentCode(@PathVariable String code){
        return disciplineScientifiqueErcService.deleteByDisciplineScientifiqueErcParentCode(code);
        }

        @ApiOperation("find by disciplineScientifiqueErcParent id")
        @GetMapping("/disciplineScientifiqueErcParent/id/{id}")
        public List<DisciplineScientifiqueErc> findByDisciplineScientifiqueErcParentId(@PathVariable Long id){
        return disciplineScientifiqueErcService.findByDisciplineScientifiqueErcParentId(id);
        }

        @ApiOperation("delete by disciplineScientifiqueErcParent id")
        @DeleteMapping("/disciplineScientifiqueErcParent/id/{id}")
        public int deleteByDisciplineScientifiqueErcParentId(@PathVariable Long id){
        return disciplineScientifiqueErcService.deleteByDisciplineScientifiqueErcParentId(id);
        }

        @ApiOperation("find by chercheur numeroMatricule")
        @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public List<DisciplineScientifiqueErc> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueErcService.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("delete by chercheur numeroMatricule")
        @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return disciplineScientifiqueErcService.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("find by chercheur id")
        @GetMapping("/chercheur/id/{id}")
        public List<DisciplineScientifiqueErc> findByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueErcService.findByChercheurId(id);
        }

        @ApiOperation("delete by chercheur id")
        @DeleteMapping("/chercheur/id/{id}")
        public int deleteByChercheurId(@PathVariable Long id){
        return disciplineScientifiqueErcService.deleteByChercheurId(id);
        }



            }
