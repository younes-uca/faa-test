package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcAssociationChercheurService;

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
import com.ird.faa.bean.DisciplineScientifiqueErcAssociation;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueErcAssociationConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcAssociationVo;

@Api("Manages disciplineScientifiqueErcAssociation services")
@RestController
@RequestMapping("api/chercheur/disciplineScientifiqueErcAssociation")
public class DisciplineScientifiqueErcAssociationRestChercheur {

@Autowired
private DisciplineScientifiqueErcAssociationChercheurService disciplineScientifiqueErcAssociationService;

@Autowired
private DisciplineScientifiqueErcAssociationConverter disciplineScientifiqueErcAssociationConverter;


            @ApiOperation("Updates the specified  disciplineScientifiqueErcAssociation")
            @PutMapping("/")
            public  DisciplineScientifiqueErcAssociationVo update(@RequestBody  DisciplineScientifiqueErcAssociationVo  disciplineScientifiqueErcAssociationVo){
            DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation = disciplineScientifiqueErcAssociationConverter.toItem(disciplineScientifiqueErcAssociationVo);
            disciplineScientifiqueErcAssociation = disciplineScientifiqueErcAssociationService.update(disciplineScientifiqueErcAssociation);
            return disciplineScientifiqueErcAssociationConverter.toVo(disciplineScientifiqueErcAssociation);
            }

    @ApiOperation("Finds a list of all disciplineScientifiqueErcAssociations")
    @GetMapping("/")
    public List<DisciplineScientifiqueErcAssociationVo> findAll(){
        return disciplineScientifiqueErcAssociationConverter.toVo(disciplineScientifiqueErcAssociationService.findAll());
    }

    @ApiOperation("Finds a disciplineScientifiqueErcAssociation with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DisciplineScientifiqueErcAssociationVo findByIdWithAssociatedList(@PathVariable Long id){
    return disciplineScientifiqueErcAssociationConverter.toVo(disciplineScientifiqueErcAssociationService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search disciplineScientifiqueErcAssociation by a specific criteria")
    @PostMapping("/search")
    public List<DisciplineScientifiqueErcAssociationVo> findByCriteria(@RequestBody DisciplineScientifiqueErcAssociationVo disciplineScientifiqueErcAssociationVo){
        return disciplineScientifiqueErcAssociationConverter.toVo(disciplineScientifiqueErcAssociationService.findByCriteria(disciplineScientifiqueErcAssociationVo));
        }

            @ApiOperation("Finds a disciplineScientifiqueErcAssociation by id")
            @GetMapping("/id/{id}")
            public DisciplineScientifiqueErcAssociationVo findById(@PathVariable Long id){
            return disciplineScientifiqueErcAssociationConverter.toVo(disciplineScientifiqueErcAssociationService.findById(id));
            }

            @ApiOperation("Saves the specified  disciplineScientifiqueErcAssociation")
            @PostMapping("/")
            public DisciplineScientifiqueErcAssociationVo save(@RequestBody DisciplineScientifiqueErcAssociationVo disciplineScientifiqueErcAssociationVo){
            DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation = disciplineScientifiqueErcAssociationConverter.toItem(disciplineScientifiqueErcAssociationVo);
            disciplineScientifiqueErcAssociation = disciplineScientifiqueErcAssociationService.save(disciplineScientifiqueErcAssociation);
            return disciplineScientifiqueErcAssociationConverter.toVo(disciplineScientifiqueErcAssociation);
            }

            @ApiOperation("Delete the specified disciplineScientifiqueErcAssociation")
            @DeleteMapping("/")
            public int delete(@RequestBody DisciplineScientifiqueErcAssociationVo disciplineScientifiqueErcAssociationVo){
            DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation = disciplineScientifiqueErcAssociationConverter.toItem(disciplineScientifiqueErcAssociationVo);
            return disciplineScientifiqueErcAssociationService.delete(disciplineScientifiqueErcAssociation);
            }

            @ApiOperation("Deletes a disciplineScientifiqueErcAssociation by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return disciplineScientifiqueErcAssociationService.deleteById(id);
            }
        @ApiOperation("find by disciplineScientifiqueErc code")
        @GetMapping("/disciplineScientifiqueErc/code/{code}")
        public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueErcCode(@PathVariable String code){
        return disciplineScientifiqueErcAssociationService.findByDisciplineScientifiqueErcCode(code);
        }

        @ApiOperation("delete by disciplineScientifiqueErc code")
        @DeleteMapping("/disciplineScientifiqueErc/code/{code}")
        public int deleteByDisciplineScientifiqueErcCode(@PathVariable String code){
        return disciplineScientifiqueErcAssociationService.deleteByDisciplineScientifiqueErcCode(code);
        }

        @ApiOperation("find by disciplineScientifiqueErc id")
        @GetMapping("/disciplineScientifiqueErc/id/{id}")
        public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueErcId(@PathVariable Long id){
        return disciplineScientifiqueErcAssociationService.findByDisciplineScientifiqueErcId(id);
        }

        @ApiOperation("delete by disciplineScientifiqueErc id")
        @DeleteMapping("/disciplineScientifiqueErc/id/{id}")
        public int deleteByDisciplineScientifiqueErcId(@PathVariable Long id){
        return disciplineScientifiqueErcAssociationService.deleteByDisciplineScientifiqueErcId(id);
        }

        @ApiOperation("find by disciplineScientifique code")
        @GetMapping("/disciplineScientifique/code/{code}")
        public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueCode(@PathVariable String code){
        return disciplineScientifiqueErcAssociationService.findByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("delete by disciplineScientifique code")
        @DeleteMapping("/disciplineScientifique/code/{code}")
        public int deleteByDisciplineScientifiqueCode(@PathVariable String code){
        return disciplineScientifiqueErcAssociationService.deleteByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("find by disciplineScientifique id")
        @GetMapping("/disciplineScientifique/id/{id}")
        public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueId(@PathVariable Long id){
        return disciplineScientifiqueErcAssociationService.findByDisciplineScientifiqueId(id);
        }

        @ApiOperation("delete by disciplineScientifique id")
        @DeleteMapping("/disciplineScientifique/id/{id}")
        public int deleteByDisciplineScientifiqueId(@PathVariable Long id){
        return disciplineScientifiqueErcAssociationService.deleteByDisciplineScientifiqueId(id);
        }

        @ApiOperation("find by semanticRelationship code")
        @GetMapping("/semanticRelationship/code/{code}")
        public List<DisciplineScientifiqueErcAssociation> findBySemanticRelationshipCode(@PathVariable String code){
        return disciplineScientifiqueErcAssociationService.findBySemanticRelationshipCode(code);
        }

        @ApiOperation("delete by semanticRelationship code")
        @DeleteMapping("/semanticRelationship/code/{code}")
        public int deleteBySemanticRelationshipCode(@PathVariable String code){
        return disciplineScientifiqueErcAssociationService.deleteBySemanticRelationshipCode(code);
        }

        @ApiOperation("find by semanticRelationship id")
        @GetMapping("/semanticRelationship/id/{id}")
        public List<DisciplineScientifiqueErcAssociation> findBySemanticRelationshipId(@PathVariable Long id){
        return disciplineScientifiqueErcAssociationService.findBySemanticRelationshipId(id);
        }

        @ApiOperation("delete by semanticRelationship id")
        @DeleteMapping("/semanticRelationship/id/{id}")
        public int deleteBySemanticRelationshipId(@PathVariable Long id){
        return disciplineScientifiqueErcAssociationService.deleteBySemanticRelationshipId(id);
        }



            }
